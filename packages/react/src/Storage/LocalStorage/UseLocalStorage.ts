import { useState } from "react";
import { LocalStorage } from "./LocalStorage";

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const localStorage = new LocalStorage<T>(key);

  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = localStorage.get();
      return item ?? initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  function setValue(value: T): void {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        localStorage.set(valueToStore);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return [storedValue, setValue];
}

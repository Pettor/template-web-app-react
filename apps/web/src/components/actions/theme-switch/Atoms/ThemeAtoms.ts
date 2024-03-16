import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { atomEffect } from "jotai-effect";
import type { ThemeMode } from "../ThemeSwitcherClasses";

const themeLocalStorageAtom = atomWithStorage<ThemeMode>("theme", "light");
const themeMediaQueryAtom = atom(() => window.matchMedia("(prefers-color-scheme: dark)"));

// Derived
export const themeModeAtom = atom(
  (get) => {
    const mediaQuery = get(themeMediaQueryAtom);
    const localStorageTheme = get(themeLocalStorageAtom);

    if (!localStorageTheme) {
      return mediaQuery.matches ? "dark" : "light";
    }

    return localStorageTheme;
  },
  (get, set) => {
    const currentTheme = get(themeModeAtom);
    const newTheme = currentTheme === "light" ? "dark" : "light";

    set(themeLocalStorageAtom, newTheme);
  }
);

// Effects
export const themeModeEffect = atomEffect((get) => {
  const themeMode = get(themeModeAtom);

  if (themeMode === "dark") {
    document.documentElement.classList.add("dark");
    document.querySelector("html")?.setAttribute("data-theme", "dark");
    return;
  }

  document.documentElement.classList.remove("dark");
  document.querySelector("html")?.setAttribute("data-theme", "light");
});

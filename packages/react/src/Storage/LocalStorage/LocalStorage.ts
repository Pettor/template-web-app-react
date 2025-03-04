export class LocalStorage<T> {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  set(value: T | null): void {
    const json = JSON.stringify(value);
    return window.localStorage.setItem(this.key, json);
  }

  get(): T | null {
    const json = window.localStorage.getItem(this.key);
    if (!json) {
      return null;
    }

    return JSON.parse(json) as T;
  }
}

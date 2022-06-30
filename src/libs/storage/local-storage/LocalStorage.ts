export class LocalStorage<T> {
  private _key: string;

  constructor(key: string) {
    this._key = key;
  }

  set(value: T | null): void {
    const json = JSON.stringify(value);
    return window.localStorage.setItem(this._key, json);
  }

  get(): T | null {
    const json = window.localStorage.getItem(this._key);
    if (!json) {
      return null;
    }

    return JSON.parse(json) as T;
  }
}

import { get, set } from "idb-keyval";

export class IndexDbStorage<T> {
  private _key: string;

  constructor(key: string) {
    this._key = key;
  }

  async set(value: T | null): Promise<void> {
    const json = JSON.stringify(value);
    return await set(this._key, json);
  }

  async get(): Promise<T | null> {
    const json = await get(this._key);
    if (!json) {
      return null;
    }

    return JSON.parse(json) as T;
  }
}

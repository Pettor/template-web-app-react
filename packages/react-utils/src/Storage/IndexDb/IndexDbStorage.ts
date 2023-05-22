import { get, set } from "idb-keyval";

export class IndexDbStorage<T> {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  async set(value: T | null): Promise<void> {
    const json = JSON.stringify(value);
    return await set(this.key, json);
  }

  async get(): Promise<T | null> {
    const json = await get(this.key);
    if (!json) {
      return null;
    }

    return JSON.parse(json) as T;
  }
}

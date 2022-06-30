import { AuthToken } from "../../auth/types/AuthToken";
import { IndexDbStorage } from "../../storage/index-db/IndexDbStorage";

// Token caching (token should always be hidden from main thread i.e. stay in worker)
const storage = new IndexDbStorage<AuthToken>("authToken");

export const getToken = async (): Promise<AuthToken | null> => storage.get();

export const setToken = async (token: AuthToken): Promise<void> => {
  await storage.set(token);
};

export const clearToken = async (): Promise<void> => {
  await storage.set(null);
};

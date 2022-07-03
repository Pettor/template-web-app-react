import { JwtToken } from "../../auth/types/JwtToken";

// Token caching (token should always be hidden from main thread i.e. stay in worker)
let authToken: JwtToken = null;

export const getToken = (): JwtToken => authToken;

export const setToken = (token: JwtToken): void => {
  authToken = token;
};

export const clearToken = (): void => {
  authToken = null;
};

import type { JwtToken } from "./JwtToken";

// Token caching (token should always be hidden from main thread i.e. stay in worker)
let authToken: JwtToken = null;

export function getToken(): JwtToken {
  return authToken;
}

export function setToken(token: JwtToken): void {
  authToken = token;
}

export function clearToken(): void {
  authToken = null;
}

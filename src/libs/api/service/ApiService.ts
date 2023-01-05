import { AxiosInstance, AxiosRequestConfig, RawAxiosRequestHeaders } from "axios";
import { JwtToken } from "../../auth/types/JwtToken";
import { TokenRefreshRequest } from "./requests/TokenRefreshRequest";
import { TokenRequestRequest } from "./requests/TokenRequestRequest";
import { DtoToken } from "./responses/TokenDto";

const defaultHeaders: RawAxiosRequestHeaders = {
  tenant: "root",
};

const defaultConfig: AxiosRequestConfig = {
  headers: defaultHeaders,
};

export async function tokenRequest(client: AxiosInstance, data: TokenRequestRequest): Promise<DtoToken> {
  try {
    const response = await client.post<DtoToken>("/api/tokens", data, defaultConfig);
    return response.data;
  } catch (error) {
    throw new Error("Authentication failed");
  }
}

export async function tokenRefresh(client: AxiosInstance, data: TokenRefreshRequest): Promise<DtoToken> {
  const response = await client.post<DtoToken>("/api/tokens/refresh", data, defaultConfig);

  if (response.status !== 200) {
    throw new Error("Authentication failed");
  }

  return response.data;
}

export async function createPostRequest(client: AxiosInstance, url: string, token: JwtToken, data: unknown) {
  const config: AxiosRequestConfig = {
    ...defaultConfig,
    headers: { ...defaultHeaders, Authorization: `Bearer ${token}` },
  };

  return await client.post(url, data, config);
}

export async function createGetRequest(client: AxiosInstance, url: string, token: JwtToken) {
  const config: AxiosRequestConfig = {
    ...defaultConfig,
    headers: { ...defaultHeaders, Authorization: `Bearer ${token}` },
  };

  return await client.get(url, config);
}

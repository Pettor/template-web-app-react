import { AxiosInstance, AxiosRequestConfig } from "axios";
import { JwtToken } from "../../auth/types/JwtToken";
import { TokenRefreshRequest } from "./requests/TokenRefreshRequest";
import { TokenRequestRequest } from "./requests/TokenRequestRequest";
import { DtoToken } from "./responses/TokenDto";

const defaultConfig: AxiosRequestConfig = {
  headers: {
    tenant: "root",
  },
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

export async function createRequest(client: AxiosInstance, token: JwtToken, data: unknown) {
  const config: AxiosRequestConfig = {
    ...defaultConfig,
    headers: { ...defaultConfig.headers, Authorization: `Bearer ${token}` },
  };

  return await client.post("/api/tokens/refresh", data, config);
}

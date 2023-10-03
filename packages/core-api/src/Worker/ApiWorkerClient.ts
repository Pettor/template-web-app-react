import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  RawAxiosRequestHeaders,
  AxiosHeaders,
} from "axios";
import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { produce } from "immer";
import type { LoginData } from "../Api";
import type { JwtToken } from "../Token/JwtToken";
import { getToken } from "../Token/TokenStorage";
import { tokenSchema } from "./ApiWorkerClasses";

export class ApiWorkerClient {
  private readonly tokenApiUrl = "/api/tokens";
  private readonly refreshTokenApiUrl = "/api/tokens/refresh";

  private client: AxiosInstance;
  private defaultHeaders: RawAxiosRequestHeaders;
  private defaultConfig: AxiosRequestConfig;

  constructor(client: AxiosInstance, tenant = "root") {
    this.client = client;

    this.defaultHeaders = {
      tenant,
    };

    this.defaultConfig = {
      headers: this.defaultHeaders,
    };

    // Add refresh logic to axios client
    createAuthRefreshInterceptor(client, async (failedResponse: AxiosError) => {
      if (!failedResponse.response) {
        return Promise.reject(failedResponse);
      }

      if (failedResponse.request.responseURL?.includes(this.refreshTokenApiUrl)) {
        return Promise.reject(failedResponse);
      }

      // Try to refresh token and retry request
      try {
        await this.refreshToken();
      } catch (error) {
        return Promise.reject(error);
      }

      // Retry request with new token
      failedResponse.response.config.headers = this.createHeaders();
      return Promise.resolve();
    });
  }

  public async tokenRequest(data: LoginData): Promise<JwtToken> {
    const response = await this.client.post(this.tokenApiUrl, data, this.defaultConfig);
    const { token } = await tokenSchema.validate(response.data);
    return token;
  }

  public async removeToken(): Promise<AxiosResponse> {
    return await this.client.delete(this.tokenApiUrl, this.defaultConfig);
  }

  public async refreshToken(): Promise<JwtToken> {
    // Refresh-Token API will use the standard AXIOS client to avoid issue where API is stuck
    const response = await axios.get(this.refreshTokenApiUrl, this.defaultConfig);
    const { token } = await tokenSchema.validate(response.data);
    return token;
  }

  public async patch(url: string, data?: unknown): Promise<AxiosResponse> {
    return await this.client.patch(url, data, this.createConfig());
  }

  public async post(url: string, data?: unknown): Promise<AxiosResponse> {
    return await this.client.post(url, data, this.createConfig());
  }

  public async put(url: string, data?: unknown): Promise<AxiosResponse> {
    return await this.client.put(url, data, this.createConfig());
  }

  public async get(url: string): Promise<AxiosResponse> {
    return await this.client.get(url, this.createConfig());
  }

  public async delete(url: string): Promise<AxiosResponse> {
    return await this.client.delete(url, this.createConfig());
  }

  private createConfig(): AxiosRequestConfig {
    return produce<AxiosRequestConfig>(this.defaultConfig, (draft) => {
      draft.headers = this.createHeaders();
    });
  }

  private createHeaders(): AxiosHeaders {
    return produce<AxiosHeaders>(this.defaultHeaders as AxiosHeaders, (draft) => {
      draft["Authorization"] = `Bearer ${getToken()}`;
    });
  }
}

import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  RawAxiosRequestHeaders,
  AxiosHeaders,
} from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { produce } from "immer";
import type { LoginData } from "../Api";
import type { JwtToken } from "../Token/JwtToken";
import { getToken } from "../Token/TokenStorage";
import { tokenSchema } from "./ApiWorkerClasses";

export class ApiWorkerClient {
  private readonly TOKEN_API_URL = "/api/tokens";
  private readonly REFRESH_TOKEN_API_URL = "/api/tokens/refresh";

  private _client: AxiosInstance;
  private _defaultHeaders: RawAxiosRequestHeaders;
  private _defaultConfig: AxiosRequestConfig;
  private _allowedUrls: string[];

  constructor(client: AxiosInstance, allowedUrls: string[], tenant = "root") {
    this._client = client;
    this._allowedUrls = allowedUrls;

    this._defaultHeaders = {
      tenant,
    };

    this._defaultConfig = {
      headers: this._defaultHeaders,
    };

    // Add refresh logic to axios client
    createAuthRefreshInterceptor(client, async (failedResponse: AxiosError) => {
      if (!failedResponse.response) {
        return Promise.reject(failedResponse);
      }

      if (failedResponse.request.responseURL?.includes(this.REFRESH_TOKEN_API_URL)) {
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
    const response = await this._client.post(this.TOKEN_API_URL, data, this._defaultConfig);
    const { token } = await tokenSchema.validate(response.data);
    return token;
  }

  public async removeToken(): Promise<AxiosResponse> {
    return await this._client.delete(this.TOKEN_API_URL, this._defaultConfig);
  }

  public async refreshToken(): Promise<JwtToken> {
    // Refresh-Token API will use the standard AXIOS client to avoid issue where API is stuck
    const response = await this._client.get(this.REFRESH_TOKEN_API_URL, this._defaultConfig);
    const { token } = await tokenSchema.validate(response.data);
    return token;
  }

  public async patch(url: string, data?: unknown): Promise<AxiosResponse> {
    this.checkUrl(url);
    return await this._client.patch(url, data, this.createConfig());
  }

  public async post(url: string, data?: unknown): Promise<AxiosResponse> {
    this.checkUrl(url);
    return await this._client.post(url, data, this.createConfig());
  }

  public async put(url: string, data?: unknown): Promise<AxiosResponse> {
    this.checkUrl(url);
    return await this._client.put(url, data, this.createConfig());
  }

  public async get(url: string): Promise<AxiosResponse> {
    this.checkUrl(url);
    return await this._client.get(url, this.createConfig());
  }

  public async delete(url: string): Promise<AxiosResponse> {
    this.checkUrl(url);
    return await this._client.delete(url, this.createConfig());
  }

  private createConfig(): AxiosRequestConfig {
    return produce<AxiosRequestConfig>(this._defaultConfig, (draft) => {
      draft.headers = this.createHeaders();
    });
  }

  private createHeaders(): AxiosHeaders {
    return produce<AxiosHeaders>(this._defaultHeaders as AxiosHeaders, (draft) => {
      draft["Authorization"] = `Bearer ${getToken()}`;
    });
  }

  private checkUrl(url: string): void {
    if (!this.isAllowedUrl(url)) {
      throw new Error(`URL ${url} is not allowed`);
    }
  }

  private isAllowedUrl(url: string): boolean {
    return this._allowedUrls.some((allowedUrl) => url.startsWith(allowedUrl));
  }
}

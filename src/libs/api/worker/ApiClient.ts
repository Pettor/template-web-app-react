import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { TokenRequestRequest } from "../service/requests/TokenRequestRequest";
import { DtoToken } from "../service/responses/TokenDto";
import { getToken, setToken } from "./TokenStorage";

export default class ApiClient {
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
    createAuthRefreshInterceptor(client, this.authRefresh);
  }

  private async authRefresh(failedResponse: AxiosError): Promise<void> {
    const response = failedResponse.response as AxiosResponse;

    // Try to refresh token and retry request
    try {
      await this.refreshToken();
    } catch {
      console.log("Failed to refresh token on 401");
      return Promise.reject();
    }

    // Retry request with new token
    response.config = this.createConfig();
    return Promise.resolve();
  }

  public async tokenRequest(data: TokenRequestRequest): Promise<AxiosResponse> {
    const response = await this.client.post<DtoToken>("/api/tokens", data, this.defaultConfig);
    setToken(response.data.token);

    // Remove token from response
    return { ...response, data: null };
  }

  public async refreshToken(): Promise<AxiosResponse> {
    const response = await this.client.get<DtoToken>("/api/tokens/refresh", this.defaultConfig);
    setToken(response.data.token);

    // Remove token from response
    return { ...response, data: null };
  }

  public async createPostRequest(url: string, data: unknown): Promise<AxiosResponse> {
    return await this.client.post(url, data, this.createConfig());
  }

  public async createGetRequest(url: string): Promise<AxiosResponse> {
    return await this.client.get(url, this.createConfig());
  }

  private createConfig(): AxiosRequestConfig {
    return {
      ...this.defaultConfig,
      headers: { Authorization: `Bearer ${getToken()}`, ...this.defaultHeaders },
    };
  }
}

import axios, {
  AxiosError,
  AxiosHeaders,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  RawAxiosRequestHeaders,
} from "axios";
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
    createAuthRefreshInterceptor(client, async (failedResponse: AxiosError) => {
      if (!failedResponse.response) {
        return Promise.reject(failedResponse);
      }

      if (failedResponse.request.responseURL?.includes("/api/tokens/refresh")) {
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

  public async tokenRequest(data: TokenRequestRequest): Promise<AxiosResponse> {
    const response = await this.client.post<DtoToken>("/api/tokens", data, this.defaultConfig);
    setToken(response.data.token);

    // Remove token from response
    return { ...response, data: null };
  }

  public async removeToken(): Promise<AxiosResponse> {
    return await this.client.delete("/api/tokens", this.defaultConfig);
  }

  public async refreshToken(): Promise<AxiosResponse> {
    // Refresh-Token API will use the standard AXIOS client to avoid issue where API is stuck
    const response = await axios.get<DtoToken>("/api/tokens/refresh", this.defaultConfig);
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
      headers: this.createHeaders(),
    };
  }

  private createHeaders(): AxiosHeaders {
    return new AxiosHeaders({
      Authorization: `Bearer ${getToken()}`,
      ...this.defaultHeaders,
    });
  }
}

import axios, {
  AxiosError,
  AxiosHeaders,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  RawAxiosRequestHeaders,
} from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { getToken, setToken } from "../../auth/token/TokenStorage";
import { RequestTokenDto } from "../queries/login/token-request/RequestTokenDto";
import { TokenDto } from "../queries/login/token-request/TokenDto";

export default class ApiClient {
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

  public async tokenRequest(data: RequestTokenDto): Promise<AxiosResponse> {
    const response = await this.client.post<TokenDto>(this.tokenApiUrl, data, this.defaultConfig);
    setToken(response.data.token);

    // Remove token from response
    return { ...response, data: null };
  }

  public async removeToken(): Promise<AxiosResponse> {
    return await this.client.delete(this.tokenApiUrl, this.defaultConfig);
  }

  public async refreshToken(): Promise<AxiosResponse> {
    // Refresh-Token API will use the standard AXIOS client to avoid issue where API is stuck
    console.log("HEJ2");
    const response = await axios.get<TokenDto>(this.refreshTokenApiUrl, this.defaultConfig);
    console.log("HE3");
    setToken(response.data.token);

    // Remove token from response
    return { ...response, data: null };
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

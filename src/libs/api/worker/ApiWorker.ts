import axios from "axios";
import client from "../../client/AxiosClient";
import { TokenRequestRequest } from "../service/requests/TokenRequestRequest";
import ApiClient from "./ApiClient";
import { ApiError, ApiResponseTypes } from "./ApiWorkerReponse";
import { clearToken } from "./TokenStorage";

// Request and Response types
type ApiMessages =
  | { type: "token/request"; payload: TokenRequestRequest }
  | { type: "token/refresh" }
  | { type: "user/logout" }
  | { type: "request/post"; url: string; payload: unknown }
  | { type: "request/get"; url: string };

const apiClient = new ApiClient(client);

async function messageHandler({ data: sentData, ports: [port] }: MessageEvent<ApiMessages>) {
  let apiResponse: ApiResponseTypes;

  try {
    switch (sentData.type) {
      // Login
      case "token/request":
        {
          const { payload } = sentData;
          const { status, statusText } = await apiClient.tokenRequest(payload);
          apiResponse = { data: null, status, statusText };
        }
        break;

      // Refresh Token
      case "token/refresh":
        {
          const { status, statusText } = await apiClient.refreshToken();
          apiResponse = { data: null, status, statusText };
        }
        break;

      // Logout
      case "user/logout":
        {
          await apiClient.removeToken();
          clearToken();

          apiResponse = {
            data: null,
            statusText: "OK",
            status: 200,
          };
        }

        break;

      // Post request
      case "request/post":
        {
          const { payload, url } = sentData;
          const { data, status, statusText } = await apiClient.createPostRequest(url, payload);
          apiResponse = { data, status, statusText };
        }
        break;

      // Get request
      case "request/get":
        {
          const { url } = sentData;
          const { data, status, statusText } = await apiClient.createGetRequest(url);
          apiResponse = { data, status, statusText };
        }
        break;

      default: {
        apiResponse = {
          code: "UNKNOWN_REQUEST",
          status: 400,
          cause: new Error("Unknown request"),
          message: "Unknown request",
        } as ApiError;
      }
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const { message, code, name, cause } = error;
      apiResponse = {
        message,
        code,
        name,
        cause,
        status: error.response?.status || 500,
      } as ApiError;
    } else {
      apiResponse = {
        ...(error as Error),
        message: "Unknown error",
        status: 500,
      } as ApiError;
    }
  }

  // Send response back from Worker
  port.postMessage(apiResponse);
}

addEventListener("message", messageHandler);

export type { ApiMessages };

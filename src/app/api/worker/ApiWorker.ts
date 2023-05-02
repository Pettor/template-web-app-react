import axios from "axios";
import produce from "immer";
import { clearToken } from "../../auth/token/TokenStorage";
import ApiClient from "../client/ApiClient";
import client from "../client/AxiosClient";
import type { RequestTokenDto } from "../queries/login/token-request/RequestTokenDto";
import type { ApiError, ApiResponseTypes } from "./ApiWorkerReponse";

// Request and Response types
type ApiMessages =
  | { type: "token/request"; payload: RequestTokenDto }
  | { type: "token/refresh" }
  | { type: "user/logout" }
  | { type: "request/patch"; url: string; payload?: unknown }
  | { type: "request/post"; url: string; payload?: unknown }
  | { type: "request/put"; url: string; payload?: unknown }
  | { type: "request/get"; url: string }
  | { type: "request/delete"; url: string };

const apiClient = new ApiClient(client);

async function messageHandler({ data: sentData, ports: [port] }: MessageEvent<ApiMessages>): Promise<void> {
  let apiResponse: ApiResponseTypes;

  if (!port) {
    console.error("No port provided");
    return;
  }

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

      // Patch request
      case "request/patch":
        {
          const { payload, url } = sentData;
          const { data, status, statusText } = await apiClient.patch(url, payload);
          apiResponse = { data, status, statusText };
        }
        break;

      // Post request
      case "request/post":
        {
          const { payload, url } = sentData;
          const { data, status, statusText } = await apiClient.post(url, payload);
          apiResponse = { data, status, statusText };
        }
        break;

      // Put request
      case "request/put":
        {
          const { url, payload } = sentData;
          const { data, status, statusText } = await apiClient.put(url, payload);
          apiResponse = { data, status, statusText };
        }
        break;

      // Get request
      case "request/get":
        {
          const { url } = sentData;
          const { data, status, statusText } = await apiClient.get(url);
          apiResponse = { data, status, statusText };
        }
        break;

      // Delete request
      case "request/delete":
        {
          const { url } = sentData;
          const { data, status, statusText } = await apiClient.delete(url);
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
      apiResponse = produce<ApiError>(error as ApiError, (draft) => {
        draft.message = "Unknown error";
        draft.status = 500;
      });
    }
  }

  // Send response back from Worker
  port.postMessage(apiResponse);
}

addEventListener("message", messageHandler);

export type { ApiMessages };

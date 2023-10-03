import axios from "axios";
import type { LoginData } from "../Api";
import { client } from "../Client/AxiosClient";
import { clearToken, setToken } from "../Token/TokenStorage";
import { ALLOWED_URLS } from "./ApiWorkerAllowedUrls";
import { ApiWorkerClient } from "./ApiWorkerClient";
import type { ApiError, ApiResponseTypes } from "./ApiWorkerReponse";

// Request and Response types
type ApiMessages =
  | { type: "token/request"; payload: LoginData }
  | { type: "token/refresh" }
  | { type: "user/logout" }
  | { type: "request/patch"; url: string; payload?: unknown }
  | { type: "request/post"; url: string; payload?: unknown }
  | { type: "request/put"; url: string; payload?: unknown }
  | { type: "request/get"; url: string }
  | { type: "request/delete"; url: string };

const apiWorkerClient = new ApiWorkerClient(client, ALLOWED_URLS);

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
          const token = await apiWorkerClient.tokenRequest(payload);

          setToken(token);
          apiResponse = { data: null, status: 200, statusText: "OK" };
        }
        break;

      // Refresh Token
      case "token/refresh":
        {
          const token = await apiWorkerClient.refreshToken();

          setToken(token);
          apiResponse = { data: null, status: 200, statusText: "OK" };
        }
        break;

      // Logout
      case "user/logout":
        {
          await apiWorkerClient.removeToken();
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
          const { data, status, statusText } = await apiWorkerClient.patch(url, payload);
          apiResponse = { data, status, statusText };
        }
        break;

      // Post request
      case "request/post":
        {
          const { payload, url } = sentData;
          const { data, status, statusText } = await apiWorkerClient.post(url, payload);
          apiResponse = { data, status, statusText };
        }
        break;

      // Put request
      case "request/put":
        {
          const { url, payload } = sentData;
          const { data, status, statusText } = await apiWorkerClient.put(url, payload);
          apiResponse = { data, status, statusText };
        }
        break;

      // Get request
      case "request/get":
        {
          const { url } = sentData;
          const { data, status, statusText } = await apiWorkerClient.get(url);
          apiResponse = { data, status, statusText };
        }
        break;

      // Delete request
      case "request/delete":
        {
          const { url } = sentData;
          const { data, status, statusText } = await apiWorkerClient.delete(url);
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
  } catch (e) {
    if (axios.isAxiosError(e)) {
      const { message, code, name, cause } = e;
      apiResponse = {
        message,
        code,
        name,
        cause,
        status: e.response?.status || 500,
      } as ApiError;
    } else {
      apiResponse = {
        name: "Unknown error",
        message: (e as Error).message ?? "Unknown error",
        status: 500,
      } satisfies ApiError;
    }
  }

  // Send response back from Worker
  port.postMessage(apiResponse);
}

addEventListener("message", messageHandler);

export type { ApiMessages };

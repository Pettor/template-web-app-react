import axios from "axios";
import client from "../../client/AxiosClient";
import { createGetRequest, createPostRequest, tokenRefresh, tokenRequest } from "../service/ApiService";
import { TokenRequestRequest } from "../service/requests/TokenRequestRequest";
import { ApiResponse } from "./ApiWorkerReponse";
import { clearToken, getToken, setToken } from "./TokenStorage";

// Request and Response types
type ApiMessages =
  | { type: "token/request"; payload: TokenRequestRequest }
  | { type: "token/refresh" }
  | { type: "user/logout" }
  | { type: "request/post"; url: string; payload: unknown }
  | { type: "request/get"; url: string };

async function messageHandler({ data, ports: [port] }: MessageEvent<ApiMessages>) {
  let apiResponse: ApiResponse;

  try {
    switch (data.type) {
      // Login
      case "token/request":
        {
          const { payload } = data;
          const { token } = await tokenRequest(client, payload);
          setToken(token);

          apiResponse = {
            __typename: "RequestResponse",
            data: {
              success: true,
            },
            status: 200,
          };
        }
        break;

      // Refresh Token
      case "token/refresh":
        {
          const { token } = await tokenRefresh(client);
          setToken(token);

          apiResponse = {
            __typename: "RequestResponse",
            data: {
              success: true,
            },
            status: 200,
          };
        }
        break;

      // Logout
      case "user/logout":
        {
          clearToken();

          apiResponse = {
            __typename: "RequestResponse",
            data: {
              success: true,
            },
            status: 200,
          };
        }

        break;

      // Post request
      case "request/post":
        {
          const { payload, url } = data;
          const token = await getToken();
          const { data: requestData, status } = await createPostRequest(client, url, token, payload);
          apiResponse = {
            __typename: "RequestResponse",
            data: requestData,
            status,
          };
        }
        break;

      // Get request
      case "request/get":
        {
          const { url } = data;
          const token = await getToken();
          const { data: requestData, status } = await createGetRequest(client, url, token);
          apiResponse = {
            __typename: "RequestResponse",
            data: requestData,
            status,
          };
        }
        break;

      default: {
        apiResponse = {
          __typename: "ApiError",
          error: new Error("Internal error"),
        };
      }
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      apiResponse = {
        __typename: "ApiError",
        error: new Error(error.message),
      };
    } else {
      apiResponse = {
        __typename: "ApiError",
        error: error as Error,
      };
    }
  }

  // Send response back from Worker
  port.postMessage(apiResponse);
}

addEventListener("message", messageHandler);

export type { ApiMessages };

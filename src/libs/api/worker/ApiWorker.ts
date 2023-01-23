import axios, { AxiosError, AxiosResponse } from "axios";
import client from "../../client/AxiosClient";
import { createGetRequest, createPostRequest, tokenRefresh, tokenRequest } from "../service/ApiService";
import { TokenRequestRequest } from "../service/requests/TokenRequestRequest";
import { clearToken, getToken, setToken } from "./TokenStorage";

// Request and Response types
type ApiMessages =
  | { type: "token/request"; payload: TokenRequestRequest }
  | { type: "token/refresh" }
  | { type: "user/logout" }
  | { type: "request/post"; url: string; payload: unknown }
  | { type: "request/get"; url: string };

async function messageHandler({ data, ports: [port] }: MessageEvent<ApiMessages>) {
  let apiResponse: AxiosResponse | AxiosError | Error;

  try {
    switch (data.type) {
      // Login
      case "token/request":
        {
          const { payload } = data;
          const response = await tokenRequest(client, payload);
          const {
            data: { token },
          } = response;
          setToken(token);

          // Remove token from response
          apiResponse = { ...response, data: null };
        }
        break;

      // Refresh Token
      case "token/refresh":
        {
          const response = await tokenRefresh(client);
          const {
            data: { token },
          } = response;
          setToken(token);

          // Remove token from response
          apiResponse = { ...response, data: null };
        }
        break;

      // Logout
      case "user/logout":
        {
          clearToken();

          apiResponse = {
            data: null,
            statusText: "OK",
            config: {},
            headers: {},
            status: 200,
          };
        }

        break;

      // Post request
      case "request/post":
        {
          const { payload, url } = data;
          const token = getToken();
          apiResponse = await createPostRequest(client, url, token, payload);
        }
        break;

      // Get request
      case "request/get":
        {
          const { url } = data;
          const token = getToken();
          apiResponse = await createGetRequest(client, url, token);
        }
        break;

      default: {
        apiResponse = new Error("Internal error");
      }
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      apiResponse = error;
    } else {
      apiResponse = error as Error;
    }
  }

  // Send response back from Worker
  port.postMessage(apiResponse);
}

addEventListener("message", messageHandler);

export type { ApiMessages };

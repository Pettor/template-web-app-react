import axios from "axios";
import { RefreshToken } from "../../auth/types/RefreshToken";
import client from "../../client/AxiosClient";
import { createRequest, tokenRefresh, tokenRequest } from "../service/ApiService";
import { TokenRefreshRequest } from "../service/requests/TokenRefreshRequest";
import { TokenRequestRequest } from "../service/requests/TokenRequestRequest";
import { UserForgotPasswordRequest } from "../service/requests/UserForgotPasswordRequest";
import { UserSignUpRequest } from "../service/requests/UserSignUpRequest";
import { ApiResponse } from "./ApiWorkerReponse";
import { clearToken, getToken, setToken } from "./TokenStorage";

// Request and Response types
type ApiMessages =
  | { type: "token/request"; payload: TokenRequestRequest }
  | { type: "token/refresh"; payload: RefreshToken }
  | { type: "user/logout" }
  | { type: "user/forgot-password"; payload: UserForgotPasswordRequest }
  | { type: "user/sign-up"; payload: UserSignUpRequest }
  | { type: "api/request"; payload: unknown };

const messageHandler = async ({ data, ports: [port] }: MessageEvent<ApiMessages>) => {
  let apiResponse: ApiResponse;

  try {
    switch (data.type) {
      // Login
      case "token/request":
        {
          const { payload } = data;
          const { token, refreshToken, refreshTokenExpiryTime } = await tokenRequest(client, payload);
          setToken(token);

          apiResponse = {
            __typename: "TokenRequestReponse",
            refreshToken: {
              refreshToken: refreshToken,
              refreshTokenExpiryTime: new Date(refreshTokenExpiryTime),
            },
          };
        }
        break;

      // Refresh Token
      case "token/refresh":
        {
          const { payload } = data;
          const { refreshToken } = payload;

          if (!refreshToken) {
            apiResponse = {
              __typename: "TokenRefreshResponse",
            };
            break;
          }

          const request: TokenRefreshRequest = {
            refreshToken: refreshToken,
          };

          const {
            token,
            refreshToken: newRefreshToken,
            refreshTokenExpiryTime: newRefreshTokenExpiryTime,
          } = await tokenRefresh(client, request);
          setToken(token);

          apiResponse = {
            __typename: "TokenRefreshResponse",
            refreshToken: {
              refreshToken: newRefreshToken,
              refreshTokenExpiryTime: new Date(newRefreshTokenExpiryTime),
            },
          };
        }
        break;

      // Logout
      case "user/logout":
        {
          clearToken();

          apiResponse = {
            __typename: "UserLogoutResponse",
          };
        }

        break;

      // Generic request
      case "api/request":
        {
          const { payload } = data;
          const token = getToken();
          const { data: requestData, status } = await createRequest(client, token, payload);
          apiResponse = {
            __typename: "GenericResponse",
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
        error: error,
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
};

addEventListener("message", messageHandler);

export type { ApiMessages };

import { AxiosInstance } from "axios";
import { AuthLogin } from "../../auth/types/AuthLogin";
import { AuthForgotPassword } from "../../auth/types/AuthResetPassword";
import { AuthSignUp } from "../../auth/types/AuthSignUp";
import { AuthToken } from "../../auth/types/AuthToken";
import client from "../../client/AxiosClient";
import { ApiResponse } from "./ApiWorkerReponse";
import { clearToken, getToken, setToken } from "./TokenStorage";

// Request and Response types
type ApiMessages =
  | { type: "auth/exist" }
  | { type: "auth/login"; payload: AuthLogin }
  | { type: "auth/logout" }
  | { type: "auth/reset-password"; payload: AuthForgotPassword }
  | { type: "auth/sign-up"; payload: AuthSignUp };

async function Login(client: AxiosInstance, data: AuthLogin): Promise<AuthToken> {
  try {
    const response = await client.post("/api/tokens", data);

    if (response.status !== 200) {
      throw new Error("Authentication failed");
    }

    return response.data.token;
  } catch (error) {
    throw new Error("Login failed");
  }
}

async function ResetPassword(client: AxiosInstance, data: AuthForgotPassword): Promise<void> {
  try {
    const response = await client.post("/api/users/forgot-password", data);

    if (response.status !== 200) {
      throw new Error("Authentication failed");
    }
  } catch (error) {
    throw new Error("Login failed");
  }
}

async function SignUp(client: AxiosInstance, signUp: AuthSignUp): Promise<void> {
  try {
    const response = await client.post("/api/users/self-register", signUp);

    if (response.status !== 200) {
      throw new Error("Authentication failed");
    }
  } catch (error) {
    throw new Error("Login failed");
  }
}

const messageHandler = async ({ data, ports: [port] }: MessageEvent<ApiMessages>) => {
  let apiResponse: ApiResponse;

  try {
    switch (data.type) {
      case "auth/exist": {
        const token = await getToken();

        apiResponse = {
          __typename: "ApiTokenExistsResponse",
          exists: !!token,
        };
        break;
      }
      case "auth/login": {
        const { payload } = data;
        const authToken = await Login(client, payload);
        await setToken(authToken);

        apiResponse = {
          __typename: "ApiLoginResponse",
          token: authToken,
        };
        break;
      }
      case "auth/logout":
        await clearToken();

        apiResponse = {
          __typename: "ApiLogoutResponse",
          success: true,
        };
        break;
      case "auth/reset-password": {
        const { payload } = data;
        await ResetPassword(client, payload);

        apiResponse = {
          __typename: "ApiForgotPasswordResponse",
          success: true,
        };
        break;
      }
      case "auth/sign-up": {
        const { payload } = data;
        await SignUp(client, payload);

        apiResponse = {
          __typename: "ApiSignUpResponse",
          success: true,
        };
        return;
      }
    }
  } catch (e) {
    apiResponse = {
      __typename: "ApiError",
      error: e as Error,
    };
  }

  // Send response back from Worker
  port.postMessage(apiResponse);
};

addEventListener("message", messageHandler);

export type { ApiMessages, ApiResponse };

import { AxiosInstance } from "axios";
import { AuthLogin } from "../../auth/types/AuthLogin";
import { AuthResetPassword } from "../../auth/types/AuthResetPassword";
import { AuthSignUp } from "../../auth/types/AuthSignUp";
import { AuthToken } from "../../auth/types/AuthToken";
import client from "../../client/AxiosClient";
import { clearToken, getToken, setToken } from "./TokenStorage";

// Request and Response types
type ApiMessages =
  | { type: "auth/exist" }
  | { type: "auth/login"; payload: AuthLogin }
  | { type: "auth/logout" }
  | { type: "auth/reset-password"; payload: AuthResetPassword }
  | { type: "auth/sign-up"; payload: AuthSignUp };
type ApiResponse =
  | { type: "auth/exist"; payload: { result: boolean } }
  | { type: "auth/login" }
  | { type: "auth/logout" }
  | { type: "auth/reset-password" }
  | { type: "auth/sign-up" }
  | { type: "error"; payload: { error: string } };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function Login(client: AxiosInstance, data: AuthLogin): Promise<AuthToken> {
  try {
    // TODO: Add actual login call here
    const { token } = { token: "sometoken" };
    return { token };
  } catch (error) {
    throw new Error("Login failed");
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function ResetPassword(client: AxiosInstance, data: AuthResetPassword): Promise<void> {
  try {
    // TODO: Add actual login call here
  } catch (error) {
    throw new Error("Login failed");
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function SignUp(client: AxiosInstance, signUp: AuthSignUp): Promise<void> {
  try {
    // TODO: Add actual login call here
  } catch (error) {
    throw new Error("Login failed");
  }
}

const messageHandler = async ({ data, ports: [port] }: MessageEvent<ApiMessages>) => {
  try {
    switch (data.type) {
      case "auth/exist": {
        const token = await getToken();
        port.postMessage({ type: "auth/exist", payload: { result: !!token } });
        return;
      }
      case "auth/login": {
        const { payload } = data;
        const token = await Login(client, payload);
        await setToken(token);
        port.postMessage({ type: "auth/login" });
        return;
      }
      case "auth/logout":
        await clearToken();
        port.postMessage({ type: "auth/logout" });
        return;
      case "auth/reset-password": {
        const { payload } = data;
        await ResetPassword(client, payload);
        port.postMessage({ type: "auth/reset-password" });
        return;
      }
      case "auth/sign-up": {
        const { payload } = data;
        await SignUp(client, payload);
        port.postMessage({ type: "auth/sign-up" });
        return;
      }
    }
  } catch (error) {
    port.postMessage({ type: "error", payload: { error: (error as Error).message } });
  }
};

addEventListener("message", messageHandler);

export type { ApiMessages, ApiResponse };

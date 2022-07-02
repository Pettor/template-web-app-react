import ApiWorker from "../../api/worker/ApiWorker?worker";
import { AuthLogin } from "../../auth/types/AuthLogin";
import { AuthForgotPassword } from "../../auth/types/AuthResetPassword";
import { AuthSignUp } from "../../auth/types/AuthSignUp";
import {
  ApiForgotPasswordResponse,
  ApiLoginResponse,
  ApiLogoutResponse,
  ApiSignUpResponse,
  ApiTokenExistsResponse,
} from "../worker/ApiWorkerReponse";
import { sendMessage } from "../worker/ApiWorkerUtils";

const apiWorker = new ApiWorker();

const useApi = () => {
  async function checkAuth(): Promise<boolean> {
    try {
      const { exists } = await sendMessage<ApiTokenExistsResponse>({ type: "auth/exist" }, apiWorker);
      return exists;
    } catch (error) {
      return false;
    }
  }

  async function login(data: AuthLogin) {
    await sendMessage<ApiLoginResponse>({ type: "auth/login", payload: data }, apiWorker);
  }

  async function logout() {
    await sendMessage<ApiLogoutResponse>({ type: "auth/logout" }, apiWorker);
  }

  async function resetPassword(data: AuthForgotPassword) {
    await sendMessage<ApiForgotPasswordResponse>({ type: "auth/reset-password", payload: data }, apiWorker);
  }

  async function signUp(data: AuthSignUp) {
    await sendMessage<ApiSignUpResponse>({ type: "auth/sign-up", payload: data }, apiWorker);
  }

  return {
    checkAuth,
    login,
    logout,
    resetPassword,
    signUp,
  };
};

export default useApi;

import ApiWorker from "../../api/worker/ApiWorker?worker";
import { AuthLogin } from "../../auth/types/AuthLogin";
import { AuthResetPassword } from "../../auth/types/AuthResetPassword";
import { AuthSignUp } from "../../auth/types/AuthSignUp";
import { sendMessage } from "../worker/ApiWorkerUtils";

const apiWorker = new ApiWorker();

const useApi = () => {
  async function checkAuth(): Promise<boolean> {
    const response = await sendMessage({ type: "auth/exist" }, apiWorker);
    if (response.type !== "auth/exist") {
      throw new Error("Invalid response when contacting server");
    }
    return response.payload.result;
  }

  async function login(data: AuthLogin) {
    await sendMessage({ type: "auth/login", payload: data }, apiWorker);
  }

  async function logout() {
    await sendMessage({ type: "auth/logout" }, apiWorker);
  }

  async function resetPassword(data: AuthResetPassword) {
    await sendMessage({ type: "auth/reset-password", payload: data }, apiWorker);
  }

  async function signUp(data: AuthSignUp) {
    await sendMessage({ type: "auth/sign-up", payload: data }, apiWorker);
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

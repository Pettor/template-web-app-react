import ApiWorker from "../../api/worker/ApiWorker?worker";
import { TokenRequestRequest } from "../service/requests/TokenRequestRequest";
import {
  RequestResponse,
  TokenRefreshResponse,
  TokenRequestReponse,
  UserLogoutResponse,
} from "../worker/ApiWorkerReponse";
import { sendMessage } from "../worker/ApiWorkerUtils";

const apiWorker = new ApiWorker();

function useApi() {
  async function requestToken(data: TokenRequestRequest): Promise<boolean> {
    const { success } = await sendMessage<TokenRequestReponse>({ type: "token/request", payload: data }, apiWorker);
    return success;
  }

  async function refreshToken(): Promise<boolean> {
    try {
      const response = await sendMessage<TokenRefreshResponse>({ type: "token/refresh" }, apiWorker);
      return response.success;
    } catch {
      return false;
    }
  }

  async function logout() {
    await sendMessage<UserLogoutResponse>({ type: "user/logout" }, apiWorker);
  }

  // Generic request
  async function post<T, P extends RequestResponse>(url: string, data: T): Promise<P> {
    return await sendMessage<P>({ type: "request/post", url, payload: data }, apiWorker);
  }

  async function get<P extends RequestResponse>(url: string): Promise<P> {
    return await sendMessage<P>({ type: "request/get", url }, apiWorker);
  }

  return {
    requestToken,
    refreshToken,
    logout,
    post,
    get,
  };
}

export default useApi;

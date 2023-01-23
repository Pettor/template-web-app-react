import ApiWorker from "../../api/worker/ApiWorker?worker";
import { TokenRequestRequest } from "../service/requests/TokenRequestRequest";
import { ApiResponse } from "../worker/ApiWorkerReponse";
import { sendMessage } from "../worker/ApiWorkerUtils";

const apiWorker = new ApiWorker();

function useApi() {
  async function requestToken(data: TokenRequestRequest): Promise<void> {
    await sendMessage<ApiResponse>({ type: "token/request", payload: data }, apiWorker);
  }

  async function refreshToken(): Promise<void> {
    await sendMessage<ApiResponse>({ type: "token/refresh" }, apiWorker);
  }

  async function logout() {
    await sendMessage<ApiResponse>({ type: "user/logout" }, apiWorker);
  }

  // Generic request
  async function post<T>(url: string, data: T): Promise<ApiResponse<T>> {
    return await sendMessage<T>({ type: "request/post", url, payload: data }, apiWorker);
  }

  async function get<T>(url: string): Promise<ApiResponse<T>> {
    return await sendMessage<T>({ type: "request/get", url }, apiWorker);
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

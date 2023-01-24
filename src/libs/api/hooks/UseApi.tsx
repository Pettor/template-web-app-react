import { Subscription } from "rxjs";
import ApiWorker from "../../api/worker/ApiWorker?worker";
import { TokenRequestRequest } from "../service/requests/TokenRequestRequest";
import ApiWorkerCommunication from "../worker/ApiWorkerCommunication";
import { ApiError, ApiResponse } from "../worker/ApiWorkerReponse";

const apiWorker = new ApiWorkerCommunication(new ApiWorker());

function useApi() {
  function subscribe(callback: (message: ApiError) => void): Subscription {
    return apiWorker.registerFailedRequestCallback(callback);
  }

  async function requestToken(data: TokenRequestRequest): Promise<void> {
    await apiWorker.send({ type: "token/request", payload: data });
  }

  async function refreshToken(): Promise<void> {
    await apiWorker.send({ type: "token/refresh" });
  }

  async function logout() {
    await apiWorker.send({ type: "user/logout" });
  }

  async function post<T>(url: string, data: T): Promise<ApiResponse<T>> {
    return await apiWorker.send<T>({ type: "request/post", url, payload: data });
  }

  async function get<T>(url: string): Promise<ApiResponse<T>> {
    return await apiWorker.send<T>({ type: "request/get", url });
  }

  return {
    subscribe,
    requestToken,
    refreshToken,
    logout,
    post,
    get,
  };
}

export default useApi;

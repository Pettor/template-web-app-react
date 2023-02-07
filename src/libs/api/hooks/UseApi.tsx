import { Subscription } from "rxjs";
import ApiWorker from "../../api/worker/ApiWorker?worker";
import { TokenRequestRequest } from "../service/requests/TokenRequestRequest";
import ApiWorkerCommunication from "../worker/ApiWorkerCommunication";
import { ApiError, ApiResponse } from "../worker/ApiWorkerReponse";

const apiWorker = new ApiWorkerCommunication(new ApiWorker());

interface UseApi {
  subscribe(callback: (message: ApiError) => void): Subscription;
  requestToken(data: TokenRequestRequest): Promise<void>;
  refreshToken(): Promise<void>;
  logout(): Promise<void>;
  post<T>(url: string, data: T): Promise<ApiResponse<T>>;
  get<T>(url: string): Promise<ApiResponse<T>>;
}

export default function useApi(): UseApi {
  function subscribe(callback: (message: ApiError) => void): Subscription {
    return apiWorker.registerFailedRequestCallback(callback);
  }

  async function requestToken(data: TokenRequestRequest): Promise<void> {
    await apiWorker.send({ type: "token/request", payload: data });
  }

  async function refreshToken(): Promise<void> {
    await apiWorker.send({ type: "token/refresh" });
  }

  async function logout(): Promise<void> {
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

import type { RequestTokenDto } from "./Dto/RequestTokenDto";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore - this is worker syntax
import ApiWorker from "./Worker/ApiWorker?worker";
import { ApiWorkerCommunication } from "./Worker/ApiWorkerCommunication";
import type { ApiError, ApiResponse } from "./Worker/ApiWorkerReponse";

const apiWorker = new ApiWorkerCommunication(new ApiWorker());

interface UseApi {
  subscribe(callback: (message: ApiError) => void): () => void;
  requestToken(data: RequestTokenDto): Promise<void>;
  refreshToken(): Promise<void>;
  logout(): Promise<void>;
  post<T>(url: string, data: T): Promise<ApiResponse<T>>;
  get<T>(url: string): Promise<ApiResponse<T>>;
}

export function useApi(): UseApi {
  function subscribe(callback: (message: ApiError) => void): () => void {
    return apiWorker.registerFailedRequestCallback(callback);
  }

  async function requestToken(data: RequestTokenDto): Promise<void> {
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

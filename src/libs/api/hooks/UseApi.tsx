import ApiWorker from "../../api/worker/ApiWorker?worker";
import { TokenRequestRequest } from "../service/requests/TokenRequestRequest";
import { RequestResponse } from "../worker/ApiWorkerReponse";
import { sendMessage } from "../worker/ApiWorkerUtils";

const apiWorker = new ApiWorker();

function useApi() {
  async function requestToken(data: TokenRequestRequest): Promise<void> {
    await sendMessage<RequestResponse>({ type: "token/request", payload: data }, apiWorker);
  }

  async function refreshToken(): Promise<void> {
    await sendMessage<RequestResponse>({ type: "token/refresh" }, apiWorker);
  }

  async function logout() {
    await sendMessage<RequestResponse>({ type: "user/logout" }, apiWorker);
  }

  // Generic request
  async function post<T, P extends RequestResponse>(url: string, data: T): Promise<RequestResponse<P>> {
    return await sendMessage<P>({ type: "request/post", url, payload: data }, apiWorker);
  }

  async function get<P>(url: string): Promise<RequestResponse<P>> {
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

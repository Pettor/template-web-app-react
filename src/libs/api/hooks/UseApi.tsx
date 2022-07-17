import ApiWorker from "../../api/worker/ApiWorker?worker";
import { RefreshToken } from "../../auth/types/RefreshToken";
import { TokenRequestRequest } from "../service/requests/TokenRequestRequest";
import {
  RequestResponse,
  TokenRefreshResponse,
  TokenRequestReponse,
  UserLogoutResponse,
} from "../worker/ApiWorkerReponse";
import { sendMessage } from "../worker/ApiWorkerUtils";

const apiWorker = new ApiWorker();

const useApi = () => {
  async function requestToken(data: TokenRequestRequest): Promise<RefreshToken> {
    const { refreshToken } = await sendMessage<TokenRequestReponse>(
      { type: "token/request", payload: data },
      apiWorker
    );

    return refreshToken;
  }

  async function refreshToken(data: RefreshToken): Promise<TokenRefreshResponse> {
    return await sendMessage<TokenRefreshResponse>({ type: "token/refresh", payload: data }, apiWorker);
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
};

export default useApi;

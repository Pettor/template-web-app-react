import ApiWorker from "../../api/worker/ApiWorker?worker";
import { RefreshToken } from "../../auth/types/RefreshToken";
import { TokenRequestRequest } from "../service/requests/TokenRequestRequest";
import { ApiResponse, TokenRefreshResponse, TokenRequestReponse, UserLogoutResponse } from "../worker/ApiWorkerReponse";
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
  async function makeRequest<T, P extends ApiResponse>(data: T): Promise<P> {
    return await sendMessage<P>({ type: "api/request", payload: data }, apiWorker);
  }

  return {
    requestToken,
    refreshToken,
    logout,
    makeRequest,
  };
};

export default useApi;

import { RefreshToken } from "../../auth/types/RefreshToken";

export interface ApiError {
  __typename: "ApiError";
  error: Error;
}

// Token
export interface TokenRequestReponse {
  __typename: "TokenRequestReponse";
  refreshToken: RefreshToken;
}

export interface TokenRefreshResponse {
  __typename: "TokenRefreshResponse";
  refreshToken?: RefreshToken;
}

// User
export interface UserLogoutResponse {
  __typename: "UserLogoutResponse";
}

export interface GenericResponse<T = unknown> {
  __typename: "GenericResponse";
  data: T;
  status: number;
}

export type ApiResponse = ApiError | TokenRequestReponse | TokenRefreshResponse | UserLogoutResponse | GenericResponse;

export const isApiError = (response: ApiResponse): response is ApiError => response.__typename === "ApiError";

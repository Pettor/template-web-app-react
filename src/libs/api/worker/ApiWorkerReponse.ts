export interface ApiError {
  __typename: "ApiError";
  error: Error;
}

// Token
export interface TokenRequestReponse {
  __typename: "TokenRequestReponse";
  success: boolean;
}

export interface TokenRefreshResponse {
  __typename: "TokenRefreshResponse";
  success: boolean;
}

// User
export interface UserLogoutResponse {
  __typename: "UserLogoutResponse";
}

export interface RequestResponse<T = unknown> {
  __typename: "RequestResponse";
  data: T;
  status: number;
}

export type ApiResponse = ApiError | TokenRequestReponse | TokenRefreshResponse | UserLogoutResponse | RequestResponse;

export function isApiError(response: ApiResponse): response is ApiError {
  return response.__typename === "ApiError";
}

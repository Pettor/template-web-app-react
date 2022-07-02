import { AuthToken } from "../../auth/types/AuthToken";

export interface ApiSuccess {
  status?: number;
}

export interface ApiError {
  __typename: "ApiError";
  error: Error;
}

export interface ApiLoginResponse extends ApiSuccess {
  __typename: "ApiLoginResponse";
  token: AuthToken;
}

export interface ApiTokenExistsResponse extends ApiSuccess {
  __typename: "ApiTokenExistsResponse";
  exists: boolean;
}

export interface ApiLogoutResponse extends ApiSuccess {
  __typename: "ApiLogoutResponse";
  success: boolean;
}

export interface ApiForgotPasswordResponse extends ApiSuccess {
  __typename: "ApiForgotPasswordResponse";
  success: boolean;
}

export interface ApiSignUpResponse extends ApiSuccess {
  __typename: "ApiSignUpResponse";
  success: boolean;
}

export type ApiResponse =
  | ApiError
  | ApiLoginResponse
  | ApiTokenExistsResponse
  | ApiLogoutResponse
  | ApiForgotPasswordResponse
  | ApiSignUpResponse;

export const isApiError = (response: ApiResponse): response is ApiError => response.__typename === "ApiError";

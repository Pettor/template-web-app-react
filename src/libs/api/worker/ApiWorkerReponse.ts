export interface ApiError {
  __typename: "ApiError";
  error: Error;
}

export interface RequestResponse<T = unknown> {
  __typename: "RequestResponse";
  data: T;
  status: number;
}

export type ApiResponse = ApiError | RequestResponse;

export function isApiError(response: ApiResponse): response is ApiError {
  return response.__typename === "ApiError";
}

export function isRequestResponse(response: ApiResponse): response is RequestResponse {
  return response.__typename === "RequestResponse";
}

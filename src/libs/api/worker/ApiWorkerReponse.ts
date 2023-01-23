export interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  statusText: string;
}

export interface ApiError extends Error {
  status: number;
  code?: string;
  cause?: Error;
}

export type ApiResponseTypes = ApiError | ApiResponse;

export function isApiError(apiResponse: ApiResponseTypes): apiResponse is ApiError {
  return (apiResponse as ApiError).message !== undefined;
}

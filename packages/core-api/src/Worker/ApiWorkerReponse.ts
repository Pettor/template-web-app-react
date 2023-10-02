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

export function isApiError(error: unknown): error is ApiError {
  return (error as ApiError).message !== undefined && (error as ApiError).status !== undefined;
}

import { AxiosError, AxiosResponse } from "axios";

export interface ApiError {
  __typename: "ApiError";
  error: Error;
}

export interface RequestResponse<T = unknown> {
  __typename: "RequestResponse";
  data: T;
  status: number;
}

export type ApiResponse = AxiosError | AxiosResponse;

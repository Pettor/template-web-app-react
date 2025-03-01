import type { ApiError } from "../Worker/ApiWorkerReponse";

export interface ServiceError extends ApiError {}

export function isServiceError(error: unknown): error is ServiceError {
  return (error as ServiceError).message !== undefined;
}

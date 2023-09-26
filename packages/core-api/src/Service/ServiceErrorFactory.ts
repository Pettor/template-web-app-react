import type { ApiError } from "../Worker/ApiWorkerReponse";
import { isApiError } from "../Worker/ApiWorkerReponse";

export class ServiceErrorFactory {
  public static create(e: unknown): ApiError {
    if (isApiError(e)) {
      return e;
    }

    return {
      message: "",
      name: "",
      status: 500,
    };
  }
}

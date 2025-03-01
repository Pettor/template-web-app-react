import type { ApiMessages } from "./ApiWorker";
import type { ApiError, ApiResponse, ApiResponseTypes } from "./ApiWorkerReponse";
import { isApiError } from "./ApiWorkerReponse";

export class ApiWorkerCommunication {
  private readonly worker: Worker;

  constructor(worker: Worker) {
    this.worker = worker;
  }

  public async send<T>(message: ApiMessages): Promise<ApiResponse<T>> {
    try {
      return await this.sendMessage<T>(message);
    } catch (error) {
      let apiError: ApiError;

      if (isApiError(error)) {
        apiError = error as ApiError;
      } else {
        const { message, name } = error as Error;
        apiError = {
          message,
          name,
          status: 500,
        };
      }

      throw apiError;
    }
  }

  private sendMessage<T>(message: ApiMessages): Promise<ApiResponse<T>> {
    return new Promise<ApiResponse<T>>((resolve, reject) => {
      const messageChannel = new MessageChannel();

      messageChannel.port1.onmessage = function (event: MessageEvent<ApiResponseTypes>): void {
        const { data } = event;

        if (isApiError(data)) {
          reject(data);
          return;
        }

        resolve(data as ApiResponse<T>);
      };

      this.worker.postMessage(message, [messageChannel.port2]);
    });
  }
}

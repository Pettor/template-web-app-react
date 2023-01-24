import { ApiMessages } from "./ApiWorker";
import { ApiError, ApiResponse, ApiResponseTypes, isApiError } from "./ApiWorkerReponse";

export default class ApiWorkerCommunication {
  private readonly worker: Worker;
  private readonly subscribers: Array<(error: ApiError) => void>;

  constructor(worker: Worker) {
    this.worker = worker;
    this.subscribers = [];
  }

  registerFailedRequestCallback(callback: (error: ApiError) => void) {
    this.subscribers.push(callback);
  }

  public async send<T>(message: ApiMessages): Promise<ApiResponse<T>> {
    try {
      return await this.sendMessage<T>(message);
    } catch (error) {
      if (isApiError(error)) {
        const apiError = error as ApiError;
        console.log(this.subscribers);
        this.subscribers.forEach((sub) => sub(apiError));
        throw apiError;
      }

      const { message, name } = error as Error;
      const apiError = {
        message,
        name,
        status: 500,
      };
      this.subscribers.forEach((sub) =>
        sub({
          message,
          name,
          status: 500,
        })
      );
      throw apiError;
    }
  }

  private sendMessage<T>(message: ApiMessages): Promise<ApiResponse<T>> {
    return new Promise<ApiResponse<T>>((resolve, reject) => {
      const messageChannel = new MessageChannel();

      messageChannel.port1.onmessage = function (event: MessageEvent<ApiResponseTypes>) {
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

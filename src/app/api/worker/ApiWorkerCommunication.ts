import { Subject, Subscription } from "rxjs";
import { ApiMessages } from "./ApiWorker";
import { ApiError, ApiResponse, ApiResponseTypes, isApiError } from "./ApiWorkerReponse";

export default class ApiWorkerCommunication {
  private readonly worker: Worker;
  private readonly subject: Subject<ApiError>;

  constructor(worker: Worker) {
    this.worker = worker;
    this.subject = new Subject<ApiError>();
  }

  registerFailedRequestCallback(callback: (error: ApiError) => void): Subscription {
    return this.subject.subscribe((error) => callback(error));
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

      this.subject.next(apiError);
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

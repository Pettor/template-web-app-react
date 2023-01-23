import { ApiMessages } from "./ApiWorker";
import { ApiResponse, ApiResponseTypes, isApiError } from "./ApiWorkerReponse";

export function sendMessage<T>(message: ApiMessages, to: Worker): Promise<ApiResponse<T>> {
  return new Promise<ApiResponse<T>>(function (resolve, reject) {
    const messageChannel = new MessageChannel();

    messageChannel.port1.onmessage = function (event: MessageEvent<ApiResponseTypes>) {
      const { data } = event;

      if (isApiError(data)) {
        reject(data);
        return;
      }

      resolve(data as ApiResponse<T>);
    };

    to.postMessage(message, [messageChannel.port2]);
  });
}

import { ApiMessages } from "./ApiWorker";
import { ApiResponse, ApiSuccess, isApiError } from "./ApiWorkerReponse";

export function sendMessage<T = ApiSuccess>(message: ApiMessages, to: Worker): Promise<T> {
  return new Promise<T>(function (resolve, reject) {
    const messageChannel = new MessageChannel();

    messageChannel.port1.onmessage = function (event: MessageEvent<ApiResponse>) {
      // Only for fetch errors, as these get retried
      const { data } = event;

      if (isApiError(data)) {
        reject(data.error);
        return;
      }

      resolve(data as ApiSuccess as T);
    };

    to.postMessage(message, [messageChannel.port2]);
  });
}

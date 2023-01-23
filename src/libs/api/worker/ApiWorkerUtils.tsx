import { ApiMessages } from "./ApiWorker";
import { ApiResponse, RequestResponse, isApiError } from "./ApiWorkerReponse";

export function sendMessage<T>(message: ApiMessages, to: Worker): Promise<RequestResponse<T>> {
  return new Promise<RequestResponse<T>>(function (resolve, reject) {
    const messageChannel = new MessageChannel();

    messageChannel.port1.onmessage = function (event: MessageEvent<ApiResponse>) {
      // Only for fetch errors, as these get retried
      const { data } = event;

      if (isApiError(data)) {
        reject(data.error);
        return;
      }

      const response: RequestResponse<T> = {
        __typename: "RequestResponse",
        data: data as T,
        status: 200,
      };

      resolve(response);
    };

    to.postMessage(message, [messageChannel.port2]);
  });
}

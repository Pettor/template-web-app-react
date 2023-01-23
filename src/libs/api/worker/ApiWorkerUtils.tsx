import { AxiosResponse, isAxiosError } from "axios";
import { ApiMessages } from "./ApiWorker";
import { ApiResponse } from "./ApiWorkerReponse";

export function sendMessage<T>(message: ApiMessages, to: Worker): Promise<AxiosResponse<T>> {
  return new Promise<AxiosResponse<T>>(function (resolve, reject) {
    const messageChannel = new MessageChannel();

    messageChannel.port1.onmessage = function (event: MessageEvent<ApiResponse>) {
      const { data } = event;

      if (isAxiosError(data)) {
        reject(data);
        return;
      }

      resolve(data);
    };

    to.postMessage(message, [messageChannel.port2]);
  });
}

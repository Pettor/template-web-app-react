import { ApiMessages, ApiResponse } from "./ApiWorker";

export const sendMessage = (message: ApiMessages, to: Worker) =>
  new Promise<ApiResponse>(function (resolve, reject) {
    const messageChannel = new MessageChannel();

    messageChannel.port1.onmessage = function (event: MessageEvent<ApiResponse>) {
      // Only for fetch errors, as these get retried
      const { data } = event;

      if (data.type === "error") {
        reject(new Error(data.payload.error));
      } else {
        resolve(data);
      }
    };

    to.postMessage(message, [messageChannel.port2]);
  });

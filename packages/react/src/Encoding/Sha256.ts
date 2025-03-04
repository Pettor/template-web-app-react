/* eslint-disable @typescript-eslint/no-explicit-any */
import { getCryptoSubtle } from "../Crypto/GetCrypto";

export async function sha256(str: string): Promise<ArrayBuffer> {
  const digestOp: any = getCryptoSubtle().digest({ name: "SHA-256" }, new TextEncoder().encode(str));

  // msCrypto (IE11) uses the old spec, which is not Promise based
  // https://msdn.microsoft.com/en-us/expression/dn904640(v=vs.71)
  // Instead of returning a promise, it returns a CryptoOperation
  // with a result property in it.
  // As a result, the various events need to be handled in the event that we're
  // working in IE11 (hence the msCrypto check). These events just call resolve
  // or reject depending on their intention.
  if ((window as any)?.msCrypto) {
    return new Promise((resolve, reject) => {
      digestOp.oncomplete = (e: any): void => {
        resolve(e.target.result);
      };

      digestOp.onerror = (e: ErrorEvent): void => {
        reject(e.error);
      };

      digestOp.onabort = (): void => {
        reject("The digest operation was aborted");
      };
    });
  }

  return await digestOp;
}

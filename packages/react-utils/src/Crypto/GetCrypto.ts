/* eslint-disable @typescript-eslint/no-explicit-any */
export function getCrypto(): Crypto {
  //ie 11.x uses msCrypto
  return (window.crypto || (window as any).msCrypto) as Crypto;
}

export function getCryptoSubtle(): SubtleCrypto {
  const crypto = getCrypto();
  //safari 10.x uses webkitSubtle
  return crypto.subtle || (crypto as any).webkitSubtle;
}

export function validateCrypto(): void {
  if (!getCrypto()) {
    throw new Error("For security reasons, `window.crypto` is required to run.");
  }

  if (typeof getCryptoSubtle() === "undefined") {
    throw new Error("application must run on a secure origin.");
  }
}

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
    throw new Error("For security reasons, `window.crypto` is required to run `auth0-spa-js`.");
  }
  if (typeof getCryptoSubtle() === "undefined") {
    throw new Error(`
      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.
    `);
  }
}

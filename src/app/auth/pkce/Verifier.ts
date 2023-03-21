import { getCrypto } from "~/libs/crypto/GetCrypto";

export function createVerifier(): string {
  const charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.";
  let random = "";
  const randomValues = Array.from(getCrypto().getRandomValues(new Uint8Array(43)));
  randomValues.forEach((v) => (random += charset[v % charset.length]));
  return random;
}

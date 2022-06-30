import { Buffer } from "buffer";

export function base64Encode(str: string) {
  return Buffer.from(str).toString("base64");
}

export function base64Decode(str: string) {
  return Buffer.from(str, "base64").toString();
}

const urlEncodeB64 = (input: string) => {
  const b64Chars: { [index: string]: string } = { "+": "-", "/": "_", "=": "" };
  return input.replace(/[+/=]/g, (m: string) => b64Chars[m]);
};

export const bufferToBase64UrlEncoded = (input: number[] | Uint8Array) => {
  const ie11SafeInput = new Uint8Array(input);
  return urlEncodeB64(window.btoa(String.fromCharCode(...Array.from(ie11SafeInput))));
};

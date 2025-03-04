import { Buffer } from "buffer";

export function base64Encode(str: string): string {
  return Buffer.from(str).toString("base64");
}

export function base64Decode(str: string): string {
  return Buffer.from(str, "base64").toString();
}

export function bufferToBase64UrlEncoded(input: number[] | ArrayBuffer): string {
  const ie11SafeInput = new Uint8Array(input);
  return urlEncodeB64(window.btoa(String.fromCharCode(...Array.from(ie11SafeInput))));
}

function urlEncodeB64(input: string): string {
  const b64Chars: { [index: string]: string } = { "+": "-", "/": "_", "=": "" };
  return input.replace(/[+/=]/g, (m: string | undefined) => (m && b64Chars[m]) ?? "");
}

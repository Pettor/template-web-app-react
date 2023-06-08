import { bufferToBase64UrlEncoded, sha256 } from "react-utils";

export async function createCodeChallange(verifier: string): Promise<string> {
  const buffer = await sha256(verifier);
  return bufferToBase64UrlEncoded(buffer);
}

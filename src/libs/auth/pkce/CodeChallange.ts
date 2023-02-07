import { bufferToBase64UrlEncoded } from "../../encoding/Base64";
import { sha256 } from "../../encoding/Sha256";

export async function createCodeChallange(verifier: string): Promise<string> {
  const buffer = await sha256(verifier);
  return bufferToBase64UrlEncoded(buffer);
}

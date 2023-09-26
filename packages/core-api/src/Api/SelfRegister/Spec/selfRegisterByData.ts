import { apiClient } from "../../../Client";
import { ServiceErrorFactory } from "../../../Service/ServiceErrorFactory";
import type { SelfRegisterDataDto } from "./SelfRegisterDto";

export async function selfRegisterByData(data: SelfRegisterDataDto): Promise<void> {
  try {
    await apiClient.post("/api/users/self-register", data);
  } catch (e: unknown) {
    throw ServiceErrorFactory.create(e);
  }
}

import { apiClient } from "../../../Client";
import { ServiceErrorFactory } from "../../../Service/ServiceErrorFactory";
import type { SelfRegisterData } from "../SelfRegisterClasses";

export async function postSelfRegisterByData(data: SelfRegisterData): Promise<void> {
  try {
    await apiClient.post("/api/users/self-register", data);
  } catch (e: unknown) {
    throw ServiceErrorFactory.create(e);
  }
}

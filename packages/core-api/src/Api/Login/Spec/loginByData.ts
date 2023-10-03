import { apiClient } from "../../../Client";
import { ServiceErrorFactory } from "../../../Service/ServiceErrorFactory";
import type { LoginData } from "../LoginClasses";

export async function postByData(data: LoginData): Promise<void> {
  try {
    await apiClient.login(data);
  } catch (e: unknown) {
    throw ServiceErrorFactory.create(e);
  }
}

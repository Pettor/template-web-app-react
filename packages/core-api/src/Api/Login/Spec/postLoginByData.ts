import { apiClient } from "../../../Client";
import { ServiceErrorFactory } from "../../../Service/ServiceErrorFactory";
import type { LoginData } from "../LoginClasses";

export async function postLoginByData(data: LoginData): Promise<void> {
  try {
    await apiClient.login(data);
  } catch (e: unknown) {
    throw ServiceErrorFactory.create(e);
  }
}

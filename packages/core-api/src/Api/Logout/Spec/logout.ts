import { apiClient } from "../../../Client";
import { ServiceErrorFactory } from "../../../Service/ServiceErrorFactory";

export async function logout(): Promise<void> {
  try {
    await apiClient.logout();
  } catch (e: unknown) {
    throw ServiceErrorFactory.create(e);
  }
}

import { apiClient } from "../../../Client";
import { ServiceErrorFactory } from "../../../Service/ServiceErrorFactory";

export async function refresh(): Promise<void> {
  try {
    await apiClient.refresh();
  } catch (e: unknown) {
    throw ServiceErrorFactory.create(e);
  }
}

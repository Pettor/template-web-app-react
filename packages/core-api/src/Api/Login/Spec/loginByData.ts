import { apiClient } from "../../../Client";
import { ServiceErrorFactory } from "../../../Service/ServiceErrorFactory";
import type { RequestTokenDto } from "../../../Worker/ApiWorkerClasses";

export async function postByData(data: RequestTokenDto): Promise<void> {
  try {
    await apiClient.login(data);
  } catch (e: unknown) {
    throw ServiceErrorFactory.create(e);
  }
}

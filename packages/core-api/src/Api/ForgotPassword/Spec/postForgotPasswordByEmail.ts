import { apiClient } from "../../../Client";
import { ServiceErrorFactory } from "../../../Service/ServiceErrorFactory";

export async function postForgotPasswordByEmail(email: string): Promise<void> {
  try {
    await apiClient.post("/api/users/forgot-password", { email });
  } catch (e: unknown) {
    throw ServiceErrorFactory.create(e);
  }
}

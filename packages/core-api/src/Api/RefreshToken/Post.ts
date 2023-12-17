import type { UseMutationResult } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../../Client";
import { ServiceErrorFactory } from "../../Service/ServiceErrorFactory";
import type { ApiError } from "../../Worker/ApiWorkerReponse";

export async function postRefreshToken(): Promise<void> {
  try {
    await apiClient.refresh();
  } catch (e: unknown) {
    throw ServiceErrorFactory.create(e);
  }
}

export function usePostRefreshTokenMutate(): UseMutationResult<void, ApiError, void> {
  return useMutation<void, ApiError, void>({
    mutationFn: async () => {
      return await postRefreshToken();
    },
  });
}

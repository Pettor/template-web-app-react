import type { UseMutationResult } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../../Client";
import { ServiceErrorFactory } from "../../Service/ServiceErrorFactory";
import type { ApiError } from "../../Worker/ApiWorkerReponse";

export async function postLogout(): Promise<void> {
  try {
    await apiClient.logout();
  } catch (e: unknown) {
    throw ServiceErrorFactory.create(e);
  }
}

export function usePostLogoutMutate(): UseMutationResult<void, ApiError, void> {
  return useMutation<void, ApiError, void>({
    mutationFn: async () => {
      return await postLogout();
    },
  });
}

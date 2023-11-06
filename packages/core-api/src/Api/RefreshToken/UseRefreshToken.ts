import type { UseMutationResult } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import type { ApiError } from "../../Worker/ApiWorkerReponse";
import { refreshToken } from "./Spec/refreshToken";

export function useRefreshToken(): UseMutationResult<void, ApiError, void> {
  return useMutation<void, ApiError, void>({
    mutationFn: async () => {
      return await refreshToken();
    },
  });
}

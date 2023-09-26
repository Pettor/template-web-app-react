import type { UseMutationResult } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import type { ApiError } from "../../Worker/ApiWorkerReponse";
import { logout } from "./Spec/logout";

export function useLogout(): UseMutationResult<void, ApiError, void> {
  return useMutation<void, ApiError, void>({
    mutationFn: async () => {
      return await logout();
    },
  });
}

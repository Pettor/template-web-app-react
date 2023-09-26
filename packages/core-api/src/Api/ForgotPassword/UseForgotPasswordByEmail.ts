import type { UseMutationResult } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import type { ApiError } from "../../Worker/ApiWorkerReponse";
import { postByEmail } from "./Spec/postByEmail";

export function useForgotPasswordByEmail(): UseMutationResult<void, ApiError, string> {
  return useMutation<void, ApiError, string>({
    mutationFn: async (email: string) => {
      await postByEmail(email);
    },
  });
}

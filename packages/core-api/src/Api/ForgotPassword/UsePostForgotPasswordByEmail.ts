import type { UseMutationResult } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import type { ApiError } from "../../Worker/ApiWorkerReponse";
import { postForgotPasswordByEmail } from "./Spec/postForgotPasswordByEmail";

export function usePostForgotPasswordByEmail(): UseMutationResult<void, ApiError, string> {
  return useMutation<void, ApiError, string>({
    mutationFn: async (email: string) => {
      await postForgotPasswordByEmail(email);
    },
  });
}

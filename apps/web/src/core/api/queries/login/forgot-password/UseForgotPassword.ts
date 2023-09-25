import type { UseMutationResult } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useApi } from "../../../UseApi";
import type { ForgotPasswordDto } from "./ForgotPasswordDto";

export function useForgotPassword(): UseMutationResult<void, AxiosError, ForgotPasswordDto> {
  const { post } = useApi();

  return useMutation<void, AxiosError, ForgotPasswordDto>({
    mutationFn: async (data: ForgotPasswordDto) => {
      await post("/api/users/forgot-password", data);
    },
  });
}

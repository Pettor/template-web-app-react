import type { UseMutationResult } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useAuth } from "../../../../auth/UseAuth";
import type { RequestTokenDto } from "./RequestTokenDto";

export function useLogin(): UseMutationResult<void, AxiosError, RequestTokenDto> {
  const { login: loginAuth } = useAuth();

  return useMutation<void, AxiosError, RequestTokenDto>({
    mutationFn: async (data: RequestTokenDto) => {
      const { email, password } = data;
      return loginAuth({ email, password });
    },
  });
}

import type { UseMutationResult } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import type { RequestTokenDto } from "../../Dto/RequestTokenDto";
import { useApi } from "../../UseApi";

export function useLogin(): UseMutationResult<void, AxiosError, RequestTokenDto> {
  const { requestToken: loginAuth } = useApi();

  return useMutation<void, AxiosError, RequestTokenDto>({
    mutationFn: async (data: RequestTokenDto) => {
      const { email, password } = data;
      return loginAuth({ email, password });
    },
  });
}

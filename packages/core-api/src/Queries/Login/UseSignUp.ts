import type { UseMutationResult } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import type { SignUpDto } from "../../Dto/SignUpDto";
import { useApi } from "../../UseApi";

export function useSignUp(): UseMutationResult<void, AxiosError, SignUpDto> {
  const { post } = useApi();

  return useMutation<void, AxiosError, SignUpDto>({
    mutationFn: async (data: SignUpDto) => {
      await post("/api/users/self-register", data);
    },
  });
}

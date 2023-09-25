import type { UseMutationResult } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useApi } from "../../../UseApi";
import type { SignUpDto } from "./SignUpDto";

export function useSignUp(): UseMutationResult<void, AxiosError, SignUpDto> {
  const { post } = useApi();

  return useMutation<void, AxiosError, SignUpDto>({
    mutationFn: async (data: SignUpDto) => {
      await post("/api/users/self-register", data);
    },
  });
}

import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../../auth/UseAuth";
import type { RequestTokenDto } from "./RequestTokenDto";

export default function useLogin(): {
  error: AxiosError | null;
  isLoading: boolean;
  submit: (data: RequestTokenDto) => void;
} {
  const { login: loginAuth } = useAuth();
  const navigate = useNavigate();

  const { error, isLoading, mutate } = useMutation<void, AxiosError, RequestTokenDto>({
    mutationFn: async (data: RequestTokenDto) => {
      const { email, password } = data;
      await loginAuth({ email, password });
    },
    onSuccess: () => {
      navigate("/");
    },
  });

  return {
    error,
    isLoading,
    submit: mutate,
  };
}

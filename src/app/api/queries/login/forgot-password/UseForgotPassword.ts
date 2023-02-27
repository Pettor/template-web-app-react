import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import useApi from "../../../UseApi";
import { ForgotPasswordDto } from "./ForgotPasswordDto";

export default function useForgotPassword(): {
  error: AxiosError | null;
  isLoading: boolean;
  submit: (data: ForgotPasswordDto) => void;
} {
  const { post } = useApi();
  const navigate = useNavigate();

  const { error, isLoading, mutate } = useMutation<void, AxiosError, ForgotPasswordDto>({
    mutationFn: async (data: ForgotPasswordDto) => {
      await post("/api/users/forgot-password", data);
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

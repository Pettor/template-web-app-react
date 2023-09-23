import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useAlertManager } from "shared-ui";
import { useApi } from "../../../UseApi";
import type { ForgotPasswordDto } from "./ForgotPasswordDto";

export function useForgotPassword(): {
  error: AxiosError | null;
  isLoading: boolean;
  submit: (data: ForgotPasswordDto) => void;
} {
  const { post } = useApi();
  const navigate = useNavigate();
  const { addAlert } = useAlertManager();

  const { error, isLoading, mutate } = useMutation<void, AxiosError, ForgotPasswordDto>({
    mutationFn: async (data: ForgotPasswordDto) => {
      await post("/api/users/forgot-password", data);
    },
    onSuccess: () => {
      navigate("/");
    },
    onError: (error) => {
      addAlert({
        title: "Error",
        message: error ?? { message: "" },
        severity: "error",
      });
    },
  });

  return {
    error,
    isLoading,
    submit: mutate,
  };
}

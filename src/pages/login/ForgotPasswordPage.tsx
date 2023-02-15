import React from "react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { FormResetPassword } from "../../components/forms/reset-password/ResetPasswordForm";
import ResetPasswordView from "../../components/views/login/ResetPasswordView";
import useApi from "../../libs/api/hooks/UseApi";

export default function SignIn(): React.ReactElement {
  const navigate = useNavigate();
  const { post } = useApi();

  const {
    error,
    isLoading,
    mutate: forgotPassword,
  } = useMutation<void, AxiosError, FormResetPassword>({
    mutationFn: async (data: FormResetPassword) => {
      const { email } = data;
      await post("/api/users/forgot-password", { email });
    },
    onSuccess: () => {
      navigate("/");
    },
  });

  const { message: errorMessage } = error ?? { message: "" };

  async function handleSubmit(data: FormResetPassword): Promise<void> {
    forgotPassword(data);
  }

  return (
    <ResetPasswordView
      resetForm={{
        error: errorMessage,
        loading: isLoading,
        onSubmit: handleSubmit,
      }}
    />
  );
}

import React from "react";
import useForgotPassword from "../../app/api/queries/login/forgot-password/UseForgotPassword";
import useAppInfo from "../../app/config/UseAppInfo";
import type { FormForgotPassword } from "~/components/forms/forgot-password/ForgotPasswordForm";
import ForgotPasswordView from "~/components/views/login/ForgotPasswordView";

export default function ForgotPasswordPage(): React.ReactElement {
  const { appName } = useAppInfo();
  const { error, isLoading, submit } = useForgotPassword();
  const { message: errorMessage } = error ?? { message: "" };

  async function handleSubmit(data: FormForgotPassword): Promise<void> {
    submit(data);
  }

  return (
    <ForgotPasswordView
      appName={appName}
      resetForm={{
        error: errorMessage,
        loading: isLoading,
        onSubmit: handleSubmit,
      }}
    />
  );
}

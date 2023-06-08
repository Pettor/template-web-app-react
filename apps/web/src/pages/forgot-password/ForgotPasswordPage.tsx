import type { FormForgotPassword } from "~/components/forms/forgot-password/ForgotPasswordForm";
import { ForgotPasswordView } from "~/components/views/forgot-password/ForgotPasswordView";
import { useForgotPassword } from "~/core/api/queries/login/forgot-password/UseForgotPassword";
import { useAppInfo } from "~/core/config/UseAppInfo";

export function ForgotPasswordPage(): React.ReactElement {
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

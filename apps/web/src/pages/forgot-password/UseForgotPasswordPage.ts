import { usePostForgotPasswordMutate } from "api-package";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { useToastNotifier } from "ui-package";
import type { FormForgotPassword } from "~/components/forms/forgot-password/ForgotPasswordForm";
import type { ForgotPasswordViewProps } from "~/components/views/forgot-password/ForgotPasswordView";
import { useAppInfo } from "~/core/config/UseAppInfo";

export function useForgotPasswordPage(): ForgotPasswordViewProps {
  const { appName } = useAppInfo();
  const navigate = useNavigate();
  const intl = useIntl();
  const { isPending, mutateAsync: submit } = usePostForgotPasswordMutate();
  const { addToast, clearToasts } = useToastNotifier();

  function handleOnBack(): void {
    console.log("handleBack");
    navigate("/login");
  }

  async function handleOnSubmit(data: FormForgotPassword): Promise<void> {
    const { email } = data;
    clearToasts();

    try {
      await submit(email);
      navigate("/");
    } catch {
      addToast(
        intl.formatMessage({
          description: "ForgotPasswordPage - Forgot password error alert title",
          defaultMessage: "Something went wrong",
          id: "gmuIUo",
        })
      );
    }
  }

  return {
    appName,
    onBack: handleOnBack,
    resetForm: {
      loading: isPending,
      onSubmit: handleOnSubmit,
    },
  };
}

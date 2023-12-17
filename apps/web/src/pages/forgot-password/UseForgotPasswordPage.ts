import { usePostForgotPasswordMutate } from "core-api";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { useToastNotifier } from "shared-ui";
import type { FormForgotPassword } from "~/components/forms/forgot-password/ForgotPasswordForm";
import { useAppInfo } from "~/core/config/UseAppInfo";

export function useForgotPasswordPage(): {
  applicationName: string;
  isLoading: boolean;
  handleSubmit: (data: FormForgotPassword) => Promise<void>;
} {
  const { appName } = useAppInfo();
  const navigate = useNavigate();
  const intl = useIntl();
  const { isPending, mutateAsync: submit } = usePostForgotPasswordMutate();
  const { addToast, reset: resetToasts } = useToastNotifier();

  async function handleSubmit(data: FormForgotPassword): Promise<void> {
    const { email } = data;
    resetToasts();

    try {
      await submit(email);
      navigate("/");
    } catch (error) {
      addToast({
        id: "forgot-password-error",
        title: intl.formatMessage({
          description: "ForgotPasswordPage - Forgot password error alert title",
          defaultMessage: "Something went wrong",
          id: "gmuIUo",
        }),
        text: intl.formatMessage({
          description: "ForgotPasswordPage - Forgot password error alert text",
          defaultMessage: "Please verify your email address and try again.",
          id: "Dq0Eck",
        }),
        severity: "error",
      });
    }
  }

  return {
    applicationName: appName,
    isLoading: isPending,
    handleSubmit,
  };
}

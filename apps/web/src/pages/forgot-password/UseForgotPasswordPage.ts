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
  const { addToast, clearToasts } = useToastNotifier();

  async function handleSubmit(data: FormForgotPassword): Promise<void> {
    const { email } = data;
    clearToasts();

    try {
      await submit(email);
      navigate("/");
    } catch (error) {
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
    applicationName: appName,
    isLoading: isPending,
    handleSubmit,
  };
}

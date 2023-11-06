import { usePostForgotPasswordByEmail } from "core-api";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { useToastNotifier } from "shared-ui";
import { useDocumentTitle } from "usehooks-ts";
import type { FormForgotPassword } from "~/components/forms/forgot-password/ForgotPasswordForm";
import { ForgotPasswordView } from "~/components/views/forgot-password/ForgotPasswordView";
import { useAppInfo } from "~/core/config/UseAppInfo";

export function ForgotPasswordPage(): React.ReactElement {
  useDocumentTitle("Login");
  const navigate = useNavigate();
  const intl = useIntl();
  const { appName } = useAppInfo();
  const { isPending, mutateAsync: submit } = usePostForgotPasswordByEmail();
  const { addAlert, reset: resetAlerts } = useToastNotifier();

  async function handleSubmit(data: FormForgotPassword): Promise<void> {
    const { email } = data;
    resetAlerts();

    try {
      await submit(email);
      navigate("/");
    } catch (error) {
      addAlert({
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

  return (
    <ForgotPasswordView
      appName={appName}
      resetForm={{
        loading: isPending,
        onSubmit: handleSubmit,
      }}
    />
  );
}

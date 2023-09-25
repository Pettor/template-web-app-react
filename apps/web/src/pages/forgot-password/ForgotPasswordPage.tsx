import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { useAlertManager } from "shared-ui";
import { useDocumentTitle } from "usehooks-ts";
import type { FormForgotPassword } from "~/components/forms/forgot-password/ForgotPasswordForm";
import { ForgotPasswordView } from "~/components/views/forgot-password/ForgotPasswordView";
import { useForgotPassword } from "~/core/api/queries/login/forgot-password/UseForgotPassword";
import { useAppInfo } from "~/core/config/UseAppInfo";

export function ForgotPasswordPage(): React.ReactElement {
  useDocumentTitle("Login");
  const navigate = useNavigate();
  const intl = useIntl();
  const { appName } = useAppInfo();
  const { isLoading, mutateAsync: submit } = useForgotPassword();
  const { addAlert, reset } = useAlertManager();

  async function handleSubmit(data: FormForgotPassword): Promise<void> {
    reset();
    try {
      submit(data);
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
        loading: isLoading,
        onSubmit: handleSubmit,
      }}
    />
  );
}

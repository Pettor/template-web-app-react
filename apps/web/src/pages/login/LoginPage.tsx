import { type ReactElement } from "react";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { useAlertManager } from "shared-ui";
import { useDocumentTitle } from "usehooks-ts";
import type { FormLogin } from "~/components/forms/login/LoginForm";
import { LoginView } from "~/components/views/login/LoginView";
import { useLogin } from "~/core/api/queries/login/token-request/UseLogin";
import { useAppInfo } from "~/core/config/UseAppInfo";

export function LoginPage(): ReactElement {
  useDocumentTitle("Login");
  const navigate = useNavigate();
  const intl = useIntl();
  const { appName } = useAppInfo();
  const { isLoading, mutateAsync: submit } = useLogin();
  const { addAlert, reset } = useAlertManager();

  async function handleSubmit(data: FormLogin): Promise<void> {
    reset();
    try {
      await submit(data);
    } catch (error) {
      addAlert({
        id: "login-error",
        title: intl.formatMessage({
          description: "LoginPage - Login error alert title",
          defaultMessage: "Failed to login",
          id: "XHC6DM",
        }),
        text: intl.formatMessage({
          description: "LoginPage - Login error alert text",
          defaultMessage: "Please verify your credentials and try again.",
          id: "eaFclI",
        }),
        severity: "error",
      });
    }
  }

  function handleForgotPassword(): void {
    navigate("/forgot-password");
  }

  function handleSignUp(): void {
    navigate("/sign-up");
  }

  return (
    <LoginView
      appName={appName}
      loginForm={{
        loading: isLoading,
        onSubmit: handleSubmit,
      }}
      handleForgotPassword={handleForgotPassword}
      handleSignUp={handleSignUp}
    />
  );
}

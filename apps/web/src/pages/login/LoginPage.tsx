import { type ReactElement } from "react";
import { useLogin } from "core-api";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { useAlertManager } from "shared-ui";
import { useDocumentTitle } from "usehooks-ts";
import type { FormLogin } from "~/components/forms/login/LoginForm";
import { LoginView } from "~/components/views/login/LoginView";
import { useAuth } from "~/core/auth/UseAuth";
import { useAppInfo } from "~/core/config/UseAppInfo";

export function LoginPage(): ReactElement {
  useDocumentTitle("Login");
  const navigate = useNavigate();
  const intl = useIntl();
  const { appName } = useAppInfo();
  const { login } = useAuth();
  const { isLoading } = useLogin();
  const { addAlert, reset: resetAlerts } = useAlertManager();

  async function handleSubmit(data: FormLogin): Promise<void> {
    resetAlerts();

    try {
      await login(data);
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

import { useState } from "react";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import type { FormLogin } from "~/components/forms/login/LoginForm";
import { useAuth } from "~/core/auth/UseAuth";
import { useAppInfo } from "~/core/config/UseAppInfo";

export function useLoginPage(): {
  applicationName: string;
  isLoading: boolean;
  error: string;
  handleSubmit: (data: FormLogin) => Promise<void>;
  handleForgotPassword: () => void;
  handleSignUp: () => void;
} {
  const navigate = useNavigate();
  const intl = useIntl();
  const { appName } = useAppInfo();
  const { login, loginLoading } = useAuth();
  const [loginError, setLoginError] = useState<string>("");

  async function handleSubmit(data: FormLogin): Promise<void> {
    setLoginError("");

    try {
      await login(data);
      navigate("/");
    } catch (error) {
      setLoginError(
        intl.formatMessage({
          description: "LoginPage - Login error alert title",
          defaultMessage: "Incorrect username or password.",
          id: "Lh6FxC",
        })
      );
    }
  }

  function handleForgotPassword(): void {
    navigate("/forgot-password", { state: { something: "Incoming!" } });
  }

  function handleSignUp(): void {
    navigate("/sign-up");
  }

  return {
    applicationName: appName,
    isLoading: loginLoading,
    error: loginError,
    handleSubmit,
    handleForgotPassword,
    handleSignUp,
  };
}

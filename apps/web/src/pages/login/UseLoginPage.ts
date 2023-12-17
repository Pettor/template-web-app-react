import { usePostLoginMutate } from "core-api";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { useToastNotifier } from "shared-ui";
import type { FormLogin } from "~/components/forms/login/LoginForm";
import { useAuth } from "~/core/auth/UseAuth";
import { useAppInfo } from "~/core/config/UseAppInfo";

export function useLoginPage(): {
  applicationName: string;
  isLoading: boolean;
  handleSubmit: (data: FormLogin) => Promise<void>;
  handleForgotPassword: () => void;
  handleSignUp: () => void;
} {
  const navigate = useNavigate();
  const intl = useIntl();
  const { appName } = useAppInfo();
  const { login } = useAuth();
  const { isPending } = usePostLoginMutate();
  const { addToast, reset: resetToasts } = useToastNotifier();

  async function handleSubmit(data: FormLogin): Promise<void> {
    resetToasts();

    try {
      await login(data);
    } catch (error) {
      addToast({
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
    navigate("/forgot-password", { state: { something: "Incoming!" } });
  }

  function handleSignUp(): void {
    navigate("/sign-up");
  }

  return {
    applicationName: appName,
    isLoading: isPending,
    handleSubmit,
    handleForgotPassword,
    handleSignUp,
  };
}

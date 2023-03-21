import type { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import useLogin from "../../app/api/queries/login/token-request/UseLogin";
import useAppInfo from "../../app/config/UseAppInfo";
import type { FormLogin } from "~/components/forms/login/LoginForm";
import LoginView from "~/components/views/login/LoginView";

export default function LoginPage(): ReactElement {
  const navigate = useNavigate();
  const { appName } = useAppInfo();
  const { error, isLoading, submit } = useLogin();
  const { message: errorMessage } = error ?? { message: "" };

  async function handleSubmit(data: FormLogin): Promise<void> {
    submit(data);
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
        error: errorMessage,
        loading: isLoading,
        onSubmit: handleSubmit,
      }}
      handleForgotPassword={handleForgotPassword}
      handleSignUp={handleSignUp}
    />
  );
}

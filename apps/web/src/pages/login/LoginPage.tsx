import { type ReactElement } from "react";
import { useDocumentTitle } from "usehooks-ts";
import { useLoginPage } from "./UseLoginPage";
import { LoginView } from "~/components/views/login/LoginView";

export function LoginPage(): ReactElement {
  useDocumentTitle("Login");
  const { applicationName, isLoading, error, handleForgotPassword, handleSignUp, handleSubmit } = useLoginPage();

  return (
    <LoginView
      appName={applicationName}
      loginForm={{
        loading: isLoading,
        onSubmit: handleSubmit,
      }}
      error={error}
      onForgotPassword={handleForgotPassword}
      onSignUp={handleSignUp}
    />
  );
}
LoginPage.displayName = "LoginPage";

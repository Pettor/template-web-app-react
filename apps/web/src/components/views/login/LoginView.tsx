import type { ReactElement } from "react";
import { useIntl } from "react-intl";
import { BasicLayout, LogoFull } from "shared-ui";
import type { LoginFormProps } from "~/components/forms/login/LoginForm";
import { LoginForm } from "~/components/forms/login/LoginForm";

export interface IFormCredentials {
  email: string;
  password: string;
  remember: boolean;
}

export interface LoginViewProps {
  appName: string;
  loginForm: LoginFormProps;
  handleForgotPassword: () => void;
  handleSignUp: () => void;
}

export function LoginView({ appName, loginForm, handleForgotPassword, handleSignUp }: LoginViewProps): ReactElement {
  const intl = useIntl();

  return (
    <BasicLayout className="z-20 mt-32 max-w-96">
      <LogoFull appName={appName} size="large" />
      <br />
      <LoginForm {...loginForm} />
      <br />
      <div className="container flex flex-row">
        <button className="btn btn-link" onClick={handleForgotPassword}>
          {intl.formatMessage({
            description: "LoginViewLink - Forgot password",
            defaultMessage: "Forgot password?",
            id: "aNSSLX",
          })}
        </button>
        <button className="btn btn-link" onClick={handleSignUp}>
          {intl.formatMessage({
            description: "LoginViewLink - Don't have an account? Sign Up",
            defaultMessage: "Don't have an account? Sign up",
            id: "Erb2yF",
          })}
        </button>
      </div>
    </BasicLayout>
  );
}

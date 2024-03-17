import type { ReactElement } from "react";
import { useIntl } from "react-intl";
import { BasicLayout, BlueFadeBackground, GridBackground, LogoFull } from "shared-ui";
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
    <BasicLayout
      className="dark:bg-base-300"
      backgroundElement={
        <>
          <BlueFadeBackground />
          <GridBackground />
        </>
      }
    >
      <div className="flex flex-1 items-center justify-center">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card w-full shrink-0 bg-base-100 shadow-2xl">
              <div className="card-body">
                <div className="flex justify-center md:hidden">
                  <LogoFull appName={appName} size="small" />
                </div>
                <div className="flex justify-center max-md:hidden">
                  <LogoFull appName={appName} size="large" />
                </div>
                <br />
                <div className="md:px-8">
                  <LoginForm {...loginForm} />
                </div>
                <br />
                <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-5 ">
                  <button className="btn btn-link z-20 col-span-2 justify-start" onClick={handleForgotPassword}>
                    {intl.formatMessage({
                      description: "LoginViewLink - Forgot password",
                      defaultMessage: "Forgot password?",
                      id: "aNSSLX",
                    })}
                  </button>
                  <button className="btn btn-link z-20 col-span-3 justify-start" onClick={handleSignUp}>
                    {intl.formatMessage({
                      description: "LoginViewLink - Don't have an account? Sign Up",
                      defaultMessage: "Don't have an account? Sign up",
                      id: "Erb2yF",
                    })}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
}

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
    <BasicLayout
      className="dark:bg-base-300"
      backgroundElement={
        <>
          <div
            className="absolute inset-0 h-full w-full bg-base-100 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]
              [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] dark:bg-base-300
              dark:bg-[radial-gradient(#46464645_1px,transparent_1px)]"
          />
          <div
            className="absolute top-0 z-[-1] h-full w-full bg-base-100
              bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
          />
        </>
      }
    >
      <div className="flex flex-1 items-center justify-center">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card w-full shrink-0 bg-base-100 shadow-2xl">
              <div className="card-body">
                <div className="md:hidden flex justify-center">
                  <LogoFull appName={appName} size="small" />
                </div>
                <div className="max-md:hidden flex justify-center">
                  <LogoFull appName={appName} size="large" />
                </div>
                <br />
                <div className="md:px-8">
                  <LoginForm {...loginForm} />
                </div>
                <br />
                <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-5 ">
                  <button className="btn btn-link justify-start col-span-2" onClick={handleForgotPassword}>
                    {intl.formatMessage({
                      description: "LoginViewLink - Forgot password",
                      defaultMessage: "Forgot password?",
                      id: "aNSSLX",
                    })}
                  </button>
                  <button className="btn btn-link col-span-3 justify-start" onClick={handleSignUp}>
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

import type { ReactElement } from "react";
import { ExclamationTriangleIcon, InformationCircleIcon } from "@heroicons/react/20/solid";
import { useIntl } from "react-intl";
import { BasicLayout, BlueFadeBackground, GridBackground, LogoFull } from "ui-package";
import type { LoginFormProps } from "~/components/forms/login/LoginForm";
import { LoginForm } from "~/components/forms/login/LoginForm";

export interface LoginViewProps {
  appName: string;
  loginForm: LoginFormProps;
  error?: string;
  onAbout(): void;
  onForgotPassword(): void;
  onSignUp(): void;
}

export function LoginView({
  appName,
  loginForm,
  error,
  onAbout,
  onForgotPassword,
  onSignUp,
}: LoginViewProps): ReactElement {
  const intl = useIntl();

  return (
    <BasicLayout
      className="dark:bg-base-300/70"
      backgroundElement={
        <>
          <BlueFadeBackground />
          <GridBackground />
        </>
      }
    >
      <div className="flex flex-1 items-center justify-center">
        <div className="hero">
          <div className="hero-content w-full flex-col lg:flex-row-reverse">
            <div className="card bg-base-100 min-h-[550px] w-full shadow-2xl sm:w-[550px]">
              <div className="card-body w-full">
                <div className="card-actions justify-end">
                  <button className="btn btn-square btn-ghost btn-sm" onClick={onAbout}>
                    <InformationCircleIcon className="h-6 w-6" />
                  </button>
                </div>
                <div className="flex justify-center md:hidden">
                  <LogoFull appName={appName} size="small" />
                </div>
                <div className="flex justify-center max-md:hidden">
                  <LogoFull appName={appName} size="large" />
                </div>
                <br />
                {error && (
                  <div className="alert alert-warning mb-4">
                    <ExclamationTriangleIcon className="h-5 w-5" />
                    {error}
                  </div>
                )}
                <div className="md:px-16">
                  <LoginForm {...loginForm} />
                </div>
                <br />
                <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-5">
                  <button className="btn btn-link z-20 col-span-2 justify-start" onClick={onForgotPassword}>
                    {intl.formatMessage({
                      description: "LoginViewLink - Forgot password",
                      defaultMessage: "Forgot password?",
                      id: "aNSSLX",
                    })}
                  </button>
                  <button className="btn btn-link z-20 col-span-3 justify-start" onClick={onSignUp}>
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

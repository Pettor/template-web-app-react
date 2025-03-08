import type { ReactElement } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useIntl } from "react-intl";
import { BasicLayout, BlueFadeBackground, GridBackground } from "ui-package";
import type { SignUpFormProps } from "~/components/forms/sign-up/SignUpForm";
import { SignUpForm } from "~/components/forms/sign-up/SignUpForm";

export interface SignUpViewProps {
  appName: string;
  signUpForm: SignUpFormProps;
  onBack: () => void;
}

export function SignUpView({ signUpForm, onBack }: SignUpViewProps): ReactElement {
  const intl = useIntl();

  return (
    <BasicLayout
      className="dark:bg-base-300/40"
      backgroundElement={
        <>
          <BlueFadeBackground />
          <GridBackground />
        </>
      }
    >
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="hero">
          <div className="hero-content w-full flex-col lg:flex-row-reverse">
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl sm:min-h-[550px] sm:w-[550px]">
              <div className="card-body w-full md:min-w-96">
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-square btn-sm"
                    onClick={onBack}
                    title={intl.formatMessage({
                      description: "SignUpView - Back button title",
                      defaultMessage: "Back",
                      id: "beyKXy",
                    })}
                    aria-label={intl.formatMessage({
                      description: "SignUpView - Back button aria label",
                      defaultMessage: "Back",
                      id: "Gy2cjY",
                    })}
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
                <p className="my-2 text-center">
                  {intl.formatMessage({
                    description: "SignUpView - Sign up description",
                    defaultMessage: "Sign up with your email address",
                    id: "NG06ZV",
                  })}
                </p>
                <div className="md:px-12">
                  <SignUpForm {...signUpForm} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
}

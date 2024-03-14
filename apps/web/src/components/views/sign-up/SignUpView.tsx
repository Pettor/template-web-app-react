import type { ReactElement } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useIntl } from "react-intl";
import { BasicLayout } from "shared-ui";
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
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card w-full shrink-0 bg-base-100 shadow-2xl">
              <div className="card-body w-full min-w-96">
                <div className="card-actions justify-end">
                  <button className="btn btn-square btn-sm" onClick={onBack}>
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>
                <p className="my-2 text-center">
                  {intl.formatMessage({
                    description: "SignUpView - Sign up description",
                    defaultMessage: "Sign up with your email address",
                    id: "NG06ZV",
                  })}
                </p>
                <SignUpForm {...signUpForm} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
}

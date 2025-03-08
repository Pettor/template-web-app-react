import type { ReactElement } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useIntl } from "react-intl";
import { BasicLayout, BlueFadeBackground, GridBackground } from "ui-package";
import type { ForgotPasswordFormProps } from "../../forms/forgot-password/ForgotPasswordForm";
import { ForgotPasswordForm } from "../../forms/forgot-password/ForgotPasswordForm";

export interface ForgotPasswordViewProps {
  appName: string;
  resetForm: ForgotPasswordFormProps;
  onBack: () => void;
}

export function ForgotPasswordView({ appName, resetForm, onBack }: ForgotPasswordViewProps): ReactElement {
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
            <div className="card bg-base-100 min-h-[550px] w-full shrink-0 shadow-2xl sm:w-[550px]">
              <div className="card-body w-full">
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-square btn-sm"
                    onClick={onBack}
                    title={intl.formatMessage({
                      description: "ForgotPasswordView - Back button title",
                      defaultMessage: "Back",
                      id: "bz4LRs",
                    })}
                    aria-label={intl.formatMessage({
                      description: "ForgotPasswordView - Back button aria label",
                      defaultMessage: "Back",
                      id: "lJxJFw",
                    })}
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
                <span className="mt-8 text-center text-base">
                  {intl.formatMessage(
                    {
                      description: "ForgotPasswordView - Reset password description",
                      defaultMessage:
                        "Enter your {appName} email adress that you used to register. We'll send you an email with your username and a link to reset your password.",
                      id: "02xDV+",
                    },
                    {
                      appName: appName,
                    }
                  )}
                </span>
                <div className="mt-4 mb-2 px-4 md:mt-8 md:px-12">
                  <ForgotPasswordForm {...resetForm} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
}

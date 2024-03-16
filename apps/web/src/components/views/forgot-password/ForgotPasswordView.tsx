import type { ReactElement } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useIntl } from "react-intl";
import { BasicLayout, BlueFadeBackground, GridBackground } from "shared-ui";
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
      className="dark:bg-base-300"
      backgroundElement={
        <>
          <BlueFadeBackground />
          <GridBackground />
        </>
      }
    >
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card w-full shrink-0 bg-base-100 shadow-2xl">
              <div className="card-body w-full max-w-[500px]">
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
                <p className="mt-4 text-center text-base">
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
                </p>
                <div className="mb-2 mt-4 px-4 md:px-20">
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

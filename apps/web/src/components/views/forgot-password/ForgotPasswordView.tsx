import type { ReactElement } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useIntl } from "react-intl";
import { BasicLayout } from "shared-ui";
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
              <div className="card-body w-full max-w-[500px]">
                <div className="card-actions justify-end">
                  <button className="btn btn-square btn-sm" onClick={onBack}>
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>
                <p className="text-center text-base mt-4">
                  {intl.formatMessage(
                    {
                      description: "ResetPasswordView - Reset password description",
                      defaultMessage:
                        "Enter your {appName} email adress that you used to register. We'll send you an email with your username and a link to reset your password.",
                      id: "Q7RMaC",
                    },
                    {
                      appName: appName,
                    }
                  )}
                </p>
                <div className="mt-4 px-4 md:px-20">
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

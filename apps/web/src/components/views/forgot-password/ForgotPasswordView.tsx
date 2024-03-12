import type { ReactElement } from "react";
import { useIntl } from "react-intl";
import { BasicLayout, LogoFull } from "shared-ui";
import type { ForgotPasswordFormProps } from "../../forms/forgot-password/ForgotPasswordForm";
import { ForgotPasswordForm } from "../../forms/forgot-password/ForgotPasswordForm";

export interface ForgotPasswordViewProps {
  appName: string;
  resetForm: ForgotPasswordFormProps;
}

export function ForgotPasswordView({ appName, resetForm }: ForgotPasswordViewProps): ReactElement {
  const intl = useIntl();

  return (
    <BasicLayout>
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="w-full max-w-[500px]">
          <LogoFull appName={appName} size="medium" />
          <br />
          <p className="text-center text-base">
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
          <div className="mt-4">
            <ForgotPasswordForm {...resetForm} />
          </div>
        </div>
      </div>
    </BasicLayout>
  );
}

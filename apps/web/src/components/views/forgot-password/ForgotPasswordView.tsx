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
    <BasicLayout className="z-20 mt-32 max-w-[400px]">
      <LogoFull appName={appName} size="medium" />
      <br />
      <p className="text-base text-center">
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
    </BasicLayout>
  );
}

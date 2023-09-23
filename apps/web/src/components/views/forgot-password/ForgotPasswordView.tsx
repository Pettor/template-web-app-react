import type { ReactElement } from "react";
import { Typography } from "@mui/material";
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
      <LogoFull appName={appName} size="medium" />
      <br />
      <Typography textAlign="center">
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
      </Typography>
      <ForgotPasswordForm {...resetForm} />
    </BasicLayout>
  );
}

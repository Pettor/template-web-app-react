import type { ComponentProps, ReactElement } from "react";
import { Typography } from "@mui/material";
import { useIntl } from "react-intl";
import { BasicLayout, LogoFull } from "shared-ui";
import { ForgotPasswordForm } from "../../forms/forgot-password/ForgotPasswordForm";

interface Props {
  appName: string;
  resetForm: ComponentProps<typeof ForgotPasswordForm>;
}

export function ForgotPasswordView({ appName, resetForm }: Props): ReactElement {
  const intl = useIntl();

  return (
    <BasicLayout>
      <LogoFull appName={appName} size="medium" />
      <br />
      <Typography
        textAlign="center"
        dangerouslySetInnerHTML={{
          __html: intl.formatMessage(
            {
              description: "ResetPasswordView - Reset password description",
              defaultMessage:
                "Enter your <b>{appName}</b> email adress that you used to register. We'll send you an email with your username and a link to reset your password.",
              id: "LSY7eb",
            },
            {
              appName: appName,
              b: (...chunks) => `<b>${chunks}</b>`,
            }
          ),
        }}
      />
      <ForgotPasswordForm {...resetForm} />
    </BasicLayout>
  );
}

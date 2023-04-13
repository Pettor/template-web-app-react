import type { ComponentProps, ReactElement } from "react";
import Typography from "@mui/material/Typography";
import { useIntl } from "react-intl";
import ForgotPasswordForm from "../../forms/forgot-password/ForgotPasswordForm";
import BasicLayout from "~/components/layout/basic/BasicLayout";
import LogoFull from "~/components/library/logo-full/LogoFull";

interface Props {
  appName: string;
  resetForm: ComponentProps<typeof ForgotPasswordForm>;
}

export default function ForgotPasswordView({ appName, resetForm }: Props): ReactElement {
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

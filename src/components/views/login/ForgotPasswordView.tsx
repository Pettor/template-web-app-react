import { ReactElement } from "react";
import Typography from "@mui/material/Typography";
import { useIntl } from "react-intl";
import ForgotPasswordForm, { ForgotPasswordFormProps } from "../../forms/forgot-password/ForgotPasswordForm";
import ContainerLayout from "../../layout/templates/ContainerLayout";
import LogoFull from "../../library/logo/LogoFull";

interface Props {
  appName: string;
  resetForm: ForgotPasswordFormProps;
}

export default function ForgotPasswordView({ appName, resetForm }: Props): ReactElement {
  const intl = useIntl();

  return (
    <ContainerLayout>
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
      ></Typography>
      <ForgotPasswordForm {...resetForm} />
    </ContainerLayout>
  );
}

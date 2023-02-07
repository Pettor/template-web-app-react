import { ReactElement } from "react";
import { useIntl } from "react-intl";
import Typography from "@mui/material/Typography";
import useAppInfo from "../../../libs/app/hooks/UseAppInfo";
import ResetPasswordForm, { ResetPasswordFormProps } from "../../forms/reset-password/ResetPasswordForm";
import ContainerLayout from "../../layout/templates/ContainerLayout";
import LogoFull from "../../library/logo/LogoFull";

interface Props {
  resetForm: ResetPasswordFormProps;
}

export default function ResetPasswordView({ resetForm }: Props): ReactElement {
  const intl = useIntl();
  const { appName } = useAppInfo();

  return (
    <ContainerLayout>
      <LogoFull size="medium" />
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
      <ResetPasswordForm {...resetForm} />
    </ContainerLayout>
  );
}

import { useIntl } from "react-intl";
import Typography from "@mui/material/Typography";
import useAppInfo from "../../../libs/app/hooks/AppInfo";
import LogoFull from "../../common/logo/LogoFull";
import ResetPasswordForm, { ResetPasswordFormProps } from "../../forms/reset-password/ResetPasswordForm";
import ContainerLayout from "../../layout/templates/ContainerLayout";

type Props = {
  resetForm: ResetPasswordFormProps;
};

const ResetPasswordView = ({ resetForm }: Props) => {
  const intl = useIntl();
  const { appName } = useAppInfo();

  return (
    <ContainerLayout>
      <LogoFull size="medium" />
      <br />
      <Typography textAlign="center">
        <div
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage(
              {
                description: "Reset Password: Description text",
                defaultMessage:
                  "Enter your <b>{appName}</b> email adress that you used to register. We'll send you an email with your username and a link to reset your password.",
                id: "pb69JS",
              },
              {
                appName: appName,
                b: (...chunks) => `<b>${chunks}</b>`,
              }
            ),
          }}
        />
      </Typography>
      <ResetPasswordForm {...resetForm} />
    </ContainerLayout>
  );
};

export default ResetPasswordView;

import Typography from "@mui/material/Typography";
import useAppInfo from "../../../libs/app/hooks/AppInfo";
import LogoFull from "../../common/logo/LogoFull";
import ResetPasswordForm, { ResetPasswordFormProps } from "../../forms/reset-password/ResetPasswordForm";
import ContainerLayout from "../../layout/templates/ContainerLayout";

type Props = {
  resetForm: ResetPasswordFormProps;
};

const ResetPasswordView = ({ resetForm }: Props) => {
  const { appName } = useAppInfo();

  return (
    <ContainerLayout>
      <LogoFull size="medium" />
      <br />
      <Typography textAlign="center">
        Enter your <b>{appName}</b> email adress that you used to register. We&apos;ll send you an email with your
        username and a link to reset your password.
      </Typography>
      <ResetPasswordForm {...resetForm} />
    </ContainerLayout>
  );
};

export default ResetPasswordView;

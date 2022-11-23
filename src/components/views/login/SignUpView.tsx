import { useIntl } from "react-intl";
import Typography from "@mui/material/Typography";
import SignUpForm, { SignUpFormProps } from "../../forms/sign-up/SignUpForm";
import ContainerLayout from "../../layout/templates/ContainerLayout";
import LogoFull from "../../library/logo/LogoFull";

interface Props {
  signUpForm: SignUpFormProps;
}

function SignUpView({ signUpForm }: Props) {
  const intl = useIntl();

  return (
    <ContainerLayout>
      <LogoFull size="medium" />
      <br />
      <Typography textAlign="center">
        {intl.formatMessage({
          description: "SignUpView - Sign up description",
          defaultMessage: "Sign up with your email address",
          id: "NG06ZV",
        })}
      </Typography>
      <SignUpForm {...signUpForm} />
    </ContainerLayout>
  );
}

export default SignUpView;

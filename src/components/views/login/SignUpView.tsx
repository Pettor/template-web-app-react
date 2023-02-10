import { ReactElement } from "react";
import Typography from "@mui/material/Typography";
import { useIntl } from "react-intl";
import SignUpForm, { SignUpFormProps } from "../../forms/sign-up/SignUpForm";
import ContainerLayout from "../../layout/templates/ContainerLayout";
import LogoFull from "../../library/logo/LogoFull";

interface Props {
  signUpForm: SignUpFormProps;
}

export default function SignUpView({ signUpForm }: Props): ReactElement {
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

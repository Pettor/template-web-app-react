import type { ReactElement } from "react";
import Typography from "@mui/material/Typography";
import { useIntl } from "react-intl";
import type { SignUpFormProps } from "../../forms/sign-up/SignUpForm";
import SignUpForm from "../../forms/sign-up/SignUpForm";
import ContainerLayout from "../../layout/templates/ContainerLayout";
import LogoFull from "../../library/logo/LogoFull";

interface Props {
  appName: string;
  signUpForm: SignUpFormProps;
}

export default function SignUpView({ appName, signUpForm }: Props): ReactElement {
  const intl = useIntl();

  return (
    <ContainerLayout>
      <LogoFull appName={appName} size="medium" />
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

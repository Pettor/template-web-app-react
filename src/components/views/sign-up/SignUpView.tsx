import type { ComponentProps, ReactElement } from "react";
import Typography from "@mui/material/Typography";
import { useIntl } from "react-intl";
import SignUpForm from "../../forms/sign-up/SignUpForm";
import BasicLayout from "~/components/layout/basic/BasicLayout";
import LogoFull from "~/components/library/logo-full/LogoFull";

interface Props {
  appName: string;
  signUpForm: ComponentProps<typeof SignUpForm>;
}

export default function SignUpView({ appName, signUpForm }: Props): ReactElement {
  const intl = useIntl();

  return (
    <BasicLayout>
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
    </BasicLayout>
  );
}

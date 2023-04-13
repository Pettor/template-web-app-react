import type { ComponentProps, ReactElement } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { useIntl } from "react-intl";
import meshUrl from "../../../assets/background/wave-background.svg";
import LoginForm from "../../forms/login/LoginForm";
import LoginViewBackground from "./LoginViewBackground";
import BasicLayout from "~/components/layout/basic/BasicLayout";
import LogoFull from "~/components/library/logo-full/LogoFull";

export interface IFormCredentials {
  email: string;
  password: string;
  remember: boolean;
}

interface Props {
  appName: string;
  loginForm: ComponentProps<typeof LoginForm>;
  handleForgotPassword: () => void;
  handleSignUp: () => void;
}

function LoginView({ appName, loginForm, handleForgotPassword, handleSignUp }: Props): ReactElement {
  const intl = useIntl();

  return (
    <Box>
      <LoginViewBackground src={meshUrl} />
      <BasicLayout sx={{ zIndex: 20 }}>
        <LogoFull appName={appName} size="large" />
        <br />
        <LoginForm {...loginForm} />
        <br />
        <Grid container>
          <Grid item xs>
            <Link component="button" onClick={handleForgotPassword} variant="body2">
              {intl.formatMessage({
                description: "LoginViewLink - Forgot password",
                defaultMessage: "Forgot password?",
                id: "aNSSLX",
              })}
            </Link>
          </Grid>
          <Grid item>
            <Link component="button" onClick={handleSignUp} variant="body2">
              {intl.formatMessage({
                description: "LoginViewLink - Don't have an account? Sign Up",
                defaultMessage: "Don't have an account? Sign up",
                id: "Erb2yF",
              })}
            </Link>
          </Grid>
        </Grid>
      </BasicLayout>
    </Box>
  );
}

export default LoginView;

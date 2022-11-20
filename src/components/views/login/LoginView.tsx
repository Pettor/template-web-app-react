import { useIntl } from "react-intl";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import meshUrl from "../../../assets/background/wave-background.svg";
import LogoFull from "../../common/logo/LogoFull";
import LoginForm, { LoginFormProps } from "../../forms/login/LoginForm";
import ContainerLayout from "../../layout/templates/ContainerLayout";

export interface IFormCredentials {
  email: string;
  password: string;
  remember: boolean;
}

type Props = {
  loginForm: LoginFormProps;
  handleForgotPassword: () => void;
  handleSignUp: () => void;
};

const WaveImg = styled("img")(({ theme }) => ({
  position: "fixed",
  bottom: -50,
  left: 0,
  zIndex: 0,

  [theme.breakpoints.down("sm")]: {
    bottom: 0,
    width: "200%",
  },
}));

const LoginView = ({ loginForm, handleForgotPassword, handleSignUp }: Props) => {
  const intl = useIntl();

  return (
    <Box>
      <WaveImg src={meshUrl} />
      <ContainerLayout sx={{ zIndex: 20 }}>
        <LogoFull size="large" />
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
      </ContainerLayout>
    </Box>
  );
};

export default LoginView;

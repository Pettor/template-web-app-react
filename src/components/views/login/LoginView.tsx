import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import meshUrl from "../../../../public/mesh-background.png";
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

const LoginView = ({ loginForm, handleForgotPassword, handleSignUp }: Props) => {
  return (
    <Box>
      <img src={meshUrl} style={{ position: "absolute", right: 0, zIndex: 0 }} />
      <ContainerLayout sx={{ zIndex: 20 }}>
        <LogoFull size="large" />
        <br />
        <LoginForm {...loginForm} />
        <br />
        <Grid container>
          <Grid item xs>
            <Link component="button" onClick={handleForgotPassword} variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link component="button" onClick={handleSignUp} variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </ContainerLayout>
    </Box>
  );
};

export default LoginView;

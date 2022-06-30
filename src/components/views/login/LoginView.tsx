import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
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
    <ContainerLayout>
      <LoginForm {...loginForm} />
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
  );
};

export default LoginView;

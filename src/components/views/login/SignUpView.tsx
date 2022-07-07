import Typography from "@mui/material/Typography";
import LogoFull from "../../common/logo/LogoFull";
import SignUpForm, { SignUpFormProps } from "../../forms/sign-up/SignUpForm";
import ContainerLayout from "../../layout/templates/ContainerLayout";

type Props = {
  signUpForm: SignUpFormProps;
};

const SignUpView = ({ signUpForm }: Props) => {
  return (
    <ContainerLayout>
      <LogoFull size="medium" />
      <br />
      <Typography textAlign="center">Sign up with your email address</Typography>
      <SignUpForm {...signUpForm} />
    </ContainerLayout>
  );
};

export default SignUpView;

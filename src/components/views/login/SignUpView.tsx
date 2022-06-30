import Typography from "@mui/material/Typography";
import SignUpForm, { SignUpFormProps } from "../../forms/sign-up/SignUpForm";
import ContainerLayout from "../../layout/templates/ContainerLayout";

type Props = {
  signUpForm: SignUpFormProps;
};

const SignUpView = ({ signUpForm }: Props) => {
  return (
    <ContainerLayout logoSize="medium">
      <Typography textAlign="center">Sign up with your email address</Typography>
      <SignUpForm {...signUpForm} />
    </ContainerLayout>
  );
};

export default SignUpView;

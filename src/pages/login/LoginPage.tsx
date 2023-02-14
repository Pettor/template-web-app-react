import { ReactElement } from "react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { FormLogin } from "../../components/forms/login/LoginForm";
import LoginView from "../../components/views/login/LoginView";
import useAuth from "../../libs/auth/hooks/UseAuth";

export default function SignIn(): ReactElement {
  const navigate = useNavigate();
  const { login: loginAuth } = useAuth();

  const {
    error,
    isLoading,
    mutate: login,
  } = useMutation<void, AxiosError, FormLogin>({
    mutationFn: async (data: FormLogin) => {
      const { email, password } = data;
      await loginAuth({ email, password });
    },
    onSuccess: () => {
      navigate("/");
    },
  });

  const { message: errorMessage } = error ?? { message: "" };

  async function handleSubmit(data: FormLogin): Promise<void> {
    login(data);
  }

  function handleForgotPassword(): void {
    navigate("/forgot-password");
  }

  function handleSignUp(): void {
    navigate("/sign-up");
  }

  return (
    <LoginView
      loginForm={{
        error: errorMessage,
        loading: isLoading,
        onSubmit: handleSubmit,
      }}
      handleForgotPassword={handleForgotPassword}
      handleSignUp={handleSignUp}
    />
  );
}

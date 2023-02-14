import { ReactElement } from "react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { FormSignUp } from "../../components/forms/sign-up/SignUpForm";
import SignUpView from "../../components/views/login/SignUpView";
import useApi from "../../libs/api/hooks/UseApi";

export default function SignIn(): ReactElement {
  const navigate = useNavigate();
  const { post } = useApi();

  const {
    error,
    isLoading,
    mutate: signUp,
  } = useMutation<void, AxiosError, FormSignUp>({
    mutationFn: async (data: FormSignUp) => {
      await post("/api/users/self-register", data);
    },
    onSuccess: () => {
      navigate("/");
    },
  });

  const { message: errorMessage } = error ?? { message: "" };

  async function handleSubmit(data: FormSignUp): Promise<void> {
    signUp(data);
  }

  return (
    <SignUpView
      signUpForm={{
        error: errorMessage,
        loading: isLoading,
        onSubmit: handleSubmit,
      }}
    />
  );
}

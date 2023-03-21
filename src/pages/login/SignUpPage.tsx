import type { ReactElement } from "react";
import useSignUp from "../../app/api/queries/login/sign-up/UseSignUp";
import useAppInfo from "../../app/config/UseAppInfo";
import type { FormSignUp } from "~/components/forms/sign-up/SignUpForm";
import SignUpView from "~/components/views/login/SignUpView";

export default function SignIn(): ReactElement {
  const { appNameCapital } = useAppInfo();
  const { error, isLoading, submit } = useSignUp();
  const { message: errorMessage } = error ?? { message: "" };

  async function handleSubmit(data: FormSignUp): Promise<void> {
    submit(data);
  }

  return (
    <SignUpView
      appName={appNameCapital}
      signUpForm={{
        error: errorMessage,
        loading: isLoading,
        onSubmit: handleSubmit,
      }}
    />
  );
}

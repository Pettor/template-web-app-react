import type { ReactElement } from "react";
import type { FormSignUp } from "~/components/forms/sign-up/SignUpForm";
import { SignUpView } from "~/components/views/sign-up/SignUpView";
import { useSignUp } from "~/core/api/queries/login/sign-up/UseSignUp";
import { useAppInfo } from "~/core/config/UseAppInfo";

export function SignUpPage(): ReactElement {
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

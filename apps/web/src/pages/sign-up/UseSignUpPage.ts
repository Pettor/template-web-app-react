import { usePostSelfRegister } from "api-package";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { useToastNotifier } from "ui-package";
import type { FormSignUp } from "~/components/forms/sign-up/SignUpForm";
import type { SignUpViewProps } from "~/components/views/sign-up/SignUpView";
import { useAppInfo } from "~/core/config/UseAppInfo";

export function useSignUpPage(): SignUpViewProps {
  const navigate = useNavigate();
  const intl = useIntl();
  const { appNameCapital } = useAppInfo();
  const { isPending, mutateAsync: submit } = usePostSelfRegister();
  const { addToast, clearToasts } = useToastNotifier();

  function handleOnBack(): void {
    navigate("/login");
  }

  async function handleOnSubmit(data: FormSignUp): Promise<void> {
    clearToasts();
    try {
      await submit(data);
      navigate("/");
    } catch {
      addToast(
        intl.formatMessage({
          description: "SignUpPage - Sign up error alert title",
          defaultMessage: "Something went wrong",
          id: "CrlHXH",
        })
      );
    }
  }

  return {
    appName: appNameCapital,
    onBack: handleOnBack,
    signUpForm: {
      loading: isPending,
      onSubmit: handleOnSubmit,
    },
  };
}

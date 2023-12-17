import { usePostSelfRegister } from "core-api";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { useToastNotifier } from "shared-ui";
import type { FormSignUp } from "~/components/forms/sign-up/SignUpForm";
import { useAppInfo } from "~/core/config/UseAppInfo";

export function useSignUpPage(): {
  applicationName: string;
  isLoading: boolean;
  handleSubmit: (data: FormSignUp) => Promise<void>;
} {
  const navigate = useNavigate();
  const intl = useIntl();
  const { appNameCapital } = useAppInfo();
  const { isPending, mutateAsync: submit } = usePostSelfRegister();
  const { addToast, reset } = useToastNotifier();

  async function handleSubmit(data: FormSignUp): Promise<void> {
    reset();
    try {
      await submit(data);
      navigate("/");
    } catch (error) {
      addToast({
        id: "sign-up-error",
        title: intl.formatMessage({
          description: "SignUpPage - Sign up error alert title",
          defaultMessage: "Something went wrong",
          id: "CrlHXH",
        }),
        text: intl.formatMessage({
          description: "SignUpPage - Sign up error alert text",
          defaultMessage: "Please verify the submitted information and try again.",
          id: "N89CNO",
        }),
        severity: "error",
      });
    }
  }

  return {
    applicationName: appNameCapital,
    isLoading: isPending,
    handleSubmit,
  };
}

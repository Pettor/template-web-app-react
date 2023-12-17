import { useDocumentTitle } from "usehooks-ts";
import { useForgotPasswordPage } from "./UseForgotPasswordPage";
import { ForgotPasswordView } from "~/components/views/forgot-password/ForgotPasswordView";

export function ForgotPasswordPage(): React.ReactElement {
  useDocumentTitle("Forgot Password");
  const { applicationName, isLoading, handleSubmit } = useForgotPasswordPage();

  return (
    <ForgotPasswordView
      appName={applicationName}
      resetForm={{
        loading: isLoading,
        onSubmit: handleSubmit,
      }}
    />
  );
}

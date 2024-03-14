import { useDocumentTitle } from "usehooks-ts";
import { useForgotPasswordPage } from "./UseForgotPasswordPage";
import { ForgotPasswordView } from "~/components/views/forgot-password/ForgotPasswordView";

export function ForgotPasswordPage(): React.ReactElement {
  useDocumentTitle("Forgot Password");
  const forgotPasswordProps = useForgotPasswordPage();
  return <ForgotPasswordView {...forgotPasswordProps} />;
}

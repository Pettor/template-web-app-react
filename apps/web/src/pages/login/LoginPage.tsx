import { type ReactElement } from "react";
import { useDocumentTitle } from "usehooks-ts";
import { useLoginPage } from "./UseLoginPage";
import { LoginView } from "~/components/views/login/LoginView";

export function LoginPage(): ReactElement {
  useDocumentTitle("Login");
  const loginProps = useLoginPage();

  return <LoginView {...loginProps} />;
}
LoginPage.displayName = "LoginPage";

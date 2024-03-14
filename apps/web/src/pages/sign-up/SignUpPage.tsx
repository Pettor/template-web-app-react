import type { ReactElement } from "react";
import { useDocumentTitle } from "usehooks-ts";
import { useSignUpPage } from "./UseSignUpPage";
import { SignUpView } from "~/components/views/sign-up/SignUpView";

export function SignUpPage(): ReactElement {
  useDocumentTitle("Sign Up");
  const signUpProps = useSignUpPage();

  return <SignUpView {...signUpProps} />;
}

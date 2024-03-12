import type { ReactElement } from "react";
import { useIntl } from "react-intl";
import { BasicLayout, LogoFull } from "shared-ui";
import type { SignUpFormProps } from "~/components/forms/sign-up/SignUpForm";
import { SignUpForm } from "~/components/forms/sign-up/SignUpForm";

export interface SignUpViewProps {
  appName: string;
  signUpForm: SignUpFormProps;
}

export function SignUpView({ appName, signUpForm }: SignUpViewProps): ReactElement {
  const intl = useIntl();

  return (
    <BasicLayout>
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="w-full max-w-[500px]">
          <LogoFull appName={appName} size="medium" />
          <br />
          <p className="text-center">
            {intl.formatMessage({
              description: "SignUpView - Sign up description",
              defaultMessage: "Sign up with your email address",
              id: "NG06ZV",
            })}
          </p>
          <SignUpForm {...signUpForm} />
        </div>
      </div>
    </BasicLayout>
  );
}

import type { ReactElement } from "react";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { InputField } from "shared-ui";
import * as yup from "yup";

export interface FormLogin {
  email: string;
  password: string;
}

export interface LoginFormProps {
  loading: boolean;
  onSubmit: SubmitHandler<FormLogin>;
}

export function LoginForm({ loading, onSubmit }: LoginFormProps): ReactElement {
  const intl = useIntl();

  const schema = yup
    .object()
    .shape({
      email: yup
        .string()
        .email(
          intl.formatMessage({
            description: "LoginFormValidation - Email must be valid",
            defaultMessage: "Email must be valid",
            id: "+2i1XS",
          })
        )
        .required(
          intl.formatMessage({
            description: "LoginFormValidation - Email is required",
            defaultMessage: "Email is required",
            id: "sJG6e/",
          })
        ),
      password: yup.string().required(
        intl.formatMessage({
          description: "LoginFormValidation - Password is required",
          defaultMessage: "Password is required",
          id: "+ADOR2",
        })
      ),
      remember: yup.boolean(),
    })
    .required();

  const {
    handleSubmit: handleFormSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleFormSubmit(onSubmit)}>
      <InputField
        id="email"
        type="text"
        placeholder="Email"
        icon={<EnvelopeIcon className="w-5 h-5" />}
        error={errors.email?.message}
        {...register("email")}
        data-testid="login-form__email-input"
      />
      <InputField
        id="password"
        type="password"
        placeholder="Password"
        icon={<LockClosedIcon className="w-5 h-5" />}
        error={errors.password?.message}
        {...register("password")}
        data-testid="login-form__password-input"
      />
      <div className="flex flex-row">
        <div className="w-full flex flex-1 justify-end">
          <button type="submit" className="btn btn-primary w-40" data-testid="login-form__submit-button">
            {loading && <span className="loading loading-spinner" />}
            {intl.formatMessage({
              description: "LoginFormButton: Sign in",
              defaultMessage: "Sign in",
              id: "zXsz1H",
            })}
          </button>
        </div>
      </div>
    </form>
  );
}

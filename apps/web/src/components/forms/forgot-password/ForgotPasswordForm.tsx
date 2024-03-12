import type { ReactElement } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { InputField } from "shared-ui";
import * as yup from "yup";

export interface FormForgotPassword {
  email: string;
}

export interface ForgotPasswordFormProps {
  loading: boolean;
  onSubmit: SubmitHandler<FormForgotPassword>;
}

export function ForgotPasswordForm({ loading, onSubmit }: ForgotPasswordFormProps): ReactElement {
  const intl = useIntl();

  const schema = yup
    .object()
    .shape({
      email: yup
        .string()
        .email(
          intl.formatMessage({
            description: "ForgotPasswordFormValidation - Email must be valid",
            defaultMessage: "Email must be valid",
            id: "4lmP9Q",
          })
        )
        .required(
          intl.formatMessage({
            description: "ForgotPasswordFormValidation - Email is required",
            defaultMessage: "Email is required",
            id: "wtHdxy",
          })
        ),
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
    <form onSubmit={handleFormSubmit(onSubmit)} className="flex flex-col gap-4">
      <InputField
        id="email"
        type="text"
        placeholder="Email"
        icon={<EnvelopeIcon className="h-5 w-5" />}
        error={errors.email?.message}
        {...register("email")}
        data-testid="forgot-password-form__email-input"
      />
      <button type="submit" className="btn btn-primary" data-testid="forgot-password-form__submit-button">
        {loading && <span className="loading loading-spinner" />}
        {intl.formatMessage({
          description: "ForgotPasswordFormButton - Send",
          defaultMessage: "Send",
          id: "JypUyk",
        })}
      </button>
    </form>
  );
}

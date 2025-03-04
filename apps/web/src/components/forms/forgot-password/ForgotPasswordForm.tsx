import type { ReactElement } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { ButtonLoading, InputField } from "ui-package";
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
    <form onSubmit={handleFormSubmit(onSubmit)} className="flex flex-col">
      <InputField
        autoFocus
        id="email"
        type="text"
        placeholder="Email"
        icon={<EnvelopeIcon className="h-5 w-5" />}
        error={errors.email?.message}
        {...register("email")}
        data-testid="forgot-password-form__email-input"
      />
      <ButtonLoading
        loading={loading}
        type="submit"
        className="btn btn-primary text-base-100 dark:text-base-300 z-20 w-full"
        title={intl.formatMessage({
          description: "ForgotPasswordFormValidation - Send button title",
          defaultMessage: "Submit",
          id: "ojcPit",
        })}
        aria-label={intl.formatMessage({
          description: "ForgotPasswordFormValidation - Send button title",
          defaultMessage: "Submit",
          id: "ojcPit",
        })}
        data-testid="forgot-password-form__submit-button"
      >
        {intl.formatMessage({
          description: "ForgotPasswordFormValidation - Send",
          defaultMessage: "Send",
          id: "r3YQJ5",
        })}
      </ButtonLoading>
    </form>
  );
}

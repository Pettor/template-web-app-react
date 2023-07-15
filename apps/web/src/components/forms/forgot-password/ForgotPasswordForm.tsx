import type { ReactElement } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { AutoAlert } from "shared-ui";
import * as yup from "yup";

export interface FormForgotPassword {
  email: string;
}

export interface ForgotPasswordFormProps {
  error: string;
  loading: boolean;
  onSubmit: SubmitHandler<FormForgotPassword>;
}

export function ForgotPasswordForm({ error, loading, onSubmit }: ForgotPasswordFormProps): ReactElement {
  const intl = useIntl();

  const schema = yup
    .object()
    .shape({
      email: yup
        .string()
        .email(
          intl.formatMessage({
            description: "ResetPasswordFormValidation - Email must be valid",
            defaultMessage: "Email must be valid",
            id: "NkLLdE",
          })
        )
        .required(
          intl.formatMessage({
            description: "ResetPasswordFormValidation - Email is required",
            defaultMessage: "Email is required",
            id: "m5YIDx",
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
    <form onSubmit={handleFormSubmit(onSubmit)}>
      <TextField
        margin="normal"
        fullWidth
        id="email"
        label={intl.formatMessage({
          description: "ResetPasswordFormLabel - Email",
          defaultMessage: "Email Address",
          id: "SRtN9p",
        })}
        autoComplete="email"
        autoFocus
        error={!!errors?.email}
        helperText={errors?.email?.message}
        inputProps={{
          "data-testid": "forgot-password-form__email-input",
        }}
        {...register("email")}
      />
      <LoadingButton
        type="submit"
        fullWidth
        loading={loading}
        variant="outlined"
        sx={{ mt: 3, mb: 2 }}
        data-testid="forgot-password-form__submit-button"
      >
        Send
      </LoadingButton>
      <AutoAlert text={error} autoClose severity="error" />
    </form>
  );
}

import type { ReactElement } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
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
    <form onSubmit={handleFormSubmit(onSubmit)}>
      <TextField
        margin="normal"
        fullWidth
        id="email"
        label={intl.formatMessage({
          description: "ForgotPasswordFormLabel - Email",
          defaultMessage: "Email Address",
          id: "9CgMnb",
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
    </form>
  );
}

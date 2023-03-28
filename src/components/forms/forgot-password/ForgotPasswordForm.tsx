import type { ReactElement } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import TextField from "@mui/material/TextField";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import * as yup from "yup";
import AutoAlert from "../../library/alert/AutoAlert";

export interface FormForgotPassword {
  email: string;
}

interface Props {
  error: string;
  loading: boolean;
  onSubmit: SubmitHandler<FormForgotPassword>;
}

export default function ForgotPasswordForm({ error, loading, onSubmit }: Props): ReactElement {
  const intl = useIntl();

  const schema = yup
    .object()
    .shape({
      email: yup
        .string()
        .email()
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
  } = useForm<FormForgotPassword>({
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
        {...register("email")}
      />
      <LoadingButton type="submit" fullWidth loading={loading} variant="outlined" sx={{ mt: 3, mb: 2 }}>
        Send
      </LoadingButton>
      <AutoAlert text={error} autoClose severity="error" />
    </form>
  );
}

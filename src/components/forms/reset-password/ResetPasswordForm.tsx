import { ReactElement } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import TextField from "@mui/material/TextField";
import { SubmitHandler, useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import * as yup from "yup";
import LocalAlert from "../../library/alert/LocalAlert";

export interface FormResetPassword {
  email: string;
}

export interface ResetPasswordFormProps {
  error: string;
  loading: boolean;
  onSubmit: SubmitHandler<FormResetPassword>;
}

export default function ResetPasswordForm({ error, loading, onSubmit }: ResetPasswordFormProps): ReactElement {
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
  } = useForm<FormResetPassword>({
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
      <LocalAlert text={error} />
    </form>
  );
}

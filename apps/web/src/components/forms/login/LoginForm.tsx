import type { ReactElement } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { Box, TextField, Stack } from "@mui/material";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { AutoAlert } from "shared-ui";
import * as yup from "yup";

export interface FormLogin {
  email: string;
  password: string;
}

interface Props {
  error: string;
  loading: boolean;
  onSubmit: SubmitHandler<FormLogin>;
}

export function LoginForm({ error, loading, onSubmit }: Props): ReactElement {
  const intl = useIntl();

  const schema = yup
    .object()
    .shape({
      email: yup
        .string()
        .email()
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
      <TextField
        margin="normal"
        fullWidth
        id="email"
        label={intl.formatMessage({
          description: "LoginFormLabel: Email",
          defaultMessage: "Email Address",
          id: "3pA647",
        })}
        autoComplete="email"
        autoFocus
        error={!!errors?.email}
        helperText={errors?.email?.message}
        {...register("email")}
      />

      <TextField
        margin="normal"
        fullWidth
        id="password"
        label={intl.formatMessage({
          description: "LoginFormLabel: Password",
          defaultMessage: "Password",
          id: "7VjY8Y",
        })}
        autoComplete="current-password"
        autoFocus
        type="password"
        error={!!errors?.password}
        helperText={errors?.password?.message}
        {...register("password")}
      />
      <Stack direction="row">
        <Box sx={{ width: "100%", display: "flex", flex: 1, justifyContent: "flex-end" }}>
          <LoadingButton
            type="submit"
            loading={loading}
            variant="outlined"
            color="primary"
            sx={{ mt: 3, mb: 2, width: 150 }}
          >
            {intl.formatMessage({
              description: "LoginFormButton: Sign in",
              defaultMessage: "Sign in",
              id: "zXsz1H",
            })}
          </LoadingButton>
        </Box>
      </Stack>
      <AutoAlert text={error} autoClose severity="error" />
    </form>
  );
}

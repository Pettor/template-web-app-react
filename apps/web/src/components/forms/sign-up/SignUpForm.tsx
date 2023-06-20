import type { ReactElement } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { AutoAlert } from "shared-ui";
import * as yup from "yup";

export interface FormSignUp {
  firstName?: string;
  lastName?: string;
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
  phoneNumber?: string;
}

interface Props {
  error: string;
  loading: boolean;
  onSubmit: SubmitHandler<FormSignUp>;
}

export function SignUpForm({ error, loading, onSubmit }: Props): ReactElement {
  const intl = useIntl();

  const schema = yup
    .object()
    .shape({
      firstName: yup.string().optional(),
      lastName: yup.string().optional(),
      userName: yup.string().required(
        intl.formatMessage({
          description: "SignUpFormValidation - Display Name is required",
          defaultMessage: "We need to call you something",
          id: "piUPAg",
        })
      ),
      email: yup
        .string()
        .email()
        .required(
          intl.formatMessage({
            description: "SignUpFormValidation - Email is required",
            defaultMessage: "Email is required",
            id: "o5TvN6",
          })
        ),
      password: yup
        .string()
        .min(
          8,
          intl.formatMessage({
            description: "SignUpFormValidation - Password is too short - min 8 characters",
            defaultMessage: "Password is too short - should be 8 chars minimum",
            id: "YzHSuh",
          })
        )
        .required(
          intl.formatMessage({
            description: "SignUpFormValidation - Password is required",
            defaultMessage: "Password is required",
            id: "p9y0Zh",
          })
        ),
      confirmPassword: yup
        .string()
        .required()
        .oneOf(
          [yup.ref("password")],
          intl.formatMessage({
            description: "SignUpFormValidation - Passwords must match",
            defaultMessage: "Passwords must match",
            id: "IOLTJ0",
          })
        ),
      phoneNumber: yup.string().optional(),
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
        autoFocus
        margin="normal"
        fullWidth
        size="small"
        id="userName"
        label={intl.formatMessage({
          description: "SignUpFormLabel - User Name",
          defaultMessage: "What should we call you?",
          id: "f2xRFX",
        })}
        type="displayName"
        error={!!errors?.userName}
        helperText={errors?.userName?.message}
        {...register("userName")}
      />
      <TextField
        margin="normal"
        fullWidth
        size="small"
        id="firstName"
        label={intl.formatMessage({
          description: "SignUpFormLabel - First Name",
          defaultMessage: "What is your first name?",
          id: "NFDCUF",
        })}
        autoComplete="firstName"
        type="displayName"
        error={!!errors?.firstName}
        helperText={errors?.firstName?.message}
        {...register("firstName")}
      />
      <TextField
        margin="normal"
        fullWidth
        size="small"
        id="lastName"
        label={intl.formatMessage({
          description: "SignUpFormLabel - Last Name",
          defaultMessage: "What is your last name?",
          id: "3YTbxI",
        })}
        autoComplete="lastName"
        type="displayName"
        error={!!errors?.lastName}
        helperText={errors?.lastName?.message}
        {...register("lastName")}
      />
      <TextField
        margin="normal"
        fullWidth
        size="small"
        id="email"
        label={intl.formatMessage({
          description: "SignUpFormLabel - Email",
          defaultMessage: "What's your email?",
          id: "tZBQgk",
        })}
        autoComplete="email"
        error={!!errors?.email}
        helperText={errors?.email?.message}
        {...register("email")}
      />
      <TextField
        margin="normal"
        type="tel"
        fullWidth
        size="small"
        id="phoneNumber"
        label={intl.formatMessage({
          description: "SignUpFormLabel - Phone Number",
          defaultMessage: "What's your phone number?",
          id: "UjAA8C",
        })}
        autoComplete="phoneNumber"
        error={!!errors?.phoneNumber}
        helperText={errors?.phoneNumber?.message}
        {...register("phoneNumber")}
      />
      <TextField
        type="password"
        margin="normal"
        fullWidth
        size="small"
        id="password"
        label={intl.formatMessage({
          description: "SignUpFormLabel - Password",
          defaultMessage: "Create a password",
          id: "ppqAda",
        })}
        autoComplete="password"
        error={!!errors?.password}
        helperText={errors?.password?.message}
        {...register("password")}
      />
      <TextField
        type="password"
        margin="normal"
        fullWidth
        size="small"
        id="confirmPassword"
        label={intl.formatMessage({
          description: "SignUpFormLabel - Confirm Password",
          defaultMessage: "Confirm password",
          id: "dU9xzq",
        })}
        autoComplete="confirmPassword"
        error={!!errors?.confirmPassword}
        helperText={errors?.confirmPassword?.message}
        {...register("confirmPassword")}
      />
      <LoadingButton type="submit" loading={loading} variant="outlined" fullWidth sx={{ mt: 3, mb: 2 }}>
        {intl.formatMessage({
          description: "SignUpFormButton - Sign Up",
          defaultMessage: "Sign Up",
          id: "oigOyc",
        })}
      </LoadingButton>
      <AutoAlert text={error} autoClose severity="error" />
    </form>
  );
}

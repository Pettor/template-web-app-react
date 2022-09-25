import { SubmitHandler, useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { yupResolver } from "@hookform/resolvers/yup";
import CloseIcon from "@mui/icons-material/Close";
import LoadingButton from "@mui/lab/LoadingButton";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import * as yup from "yup";

export interface IFormSignUp {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
}

export interface SignUpFormProps {
  error: string;
  open: boolean;
  loading: boolean;
  onAlert: () => void;
  onSubmit: SubmitHandler<IFormSignUp>;
}

const SignUpForm = ({ error, open, loading, onAlert, onSubmit }: SignUpFormProps) => {
  const intl = useIntl();

  const schema = yup
    .object()
    .shape({
      displayName: yup.string().required(
        intl.formatMessage({
          description: "Yup: Display name incorrect",
          defaultMessage: "We need to call you something",
          id: "1wWFJn",
        })
      ),
      email: yup.string().required(
        intl.formatMessage({
          description: "Yup: Email incorrect",
          defaultMessage: "Email is required",
          id: "HWQm37",
        })
      ),
      password: yup
        .string()
        .min(
          8,
          intl.formatMessage({
            description: "Yup: Password too short",
            defaultMessage: "Password is too short - should be 8 chars minimum",
            id: "DsyGiS",
          })
        )
        .required(
          intl.formatMessage({
            description: "Yup: Password required",
            defaultMessage: "Password is required",
            id: "4wlNZm",
          })
        ),
      passwordConfirmation: yup.string().oneOf(
        [yup.ref("password"), null],
        intl.formatMessage({
          description: "Yup: Password must match",
          defaultMessage: "Passwords must match",
          id: "3djSb9",
        })
      ),
    })
    .required();

  const {
    handleSubmit: handleFormSubmit,
    register,
    formState: { errors },
  } = useForm<IFormSignUp>({
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
          description: "SignUp: Username label",
          defaultMessage: "What should we call you?",
          id: "UI/Wi5",
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
          description: "SignUp: First name label",
          defaultMessage: "What is your first name?",
          id: "MlHPw2",
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
          description: "SignUp: Last name label",
          defaultMessage: "What is your last name?",
          id: "s0Yh5W",
        })}
        autoComplete="lastName"
        type="displayName"
        error={!!errors?.lastName}
        helperText={errors?.lastName?.message}
        {...register("lastName")}
      />
      <TextField
        margin="normal"
        type="email"
        fullWidth
        size="small"
        id="email"
        label={intl.formatMessage({
          description: "SignUp: Email label",
          defaultMessage: "What's your email?",
          id: "ghyHG0",
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
          description: "SignUp: Phone number label",
          defaultMessage: "What's your phone number?",
          id: "i9wpfb",
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
          description: "SignUp: Password label",
          defaultMessage: "Create a password",
          id: "+Q1hl8",
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
          description: "SignUp: Confirm password label",
          defaultMessage: "Confirm password",
          id: "/kPKgf",
        })}
        autoComplete="confirmPassword"
        error={!!errors?.confirmPassword}
        helperText={errors?.confirmPassword?.message}
        {...register("confirmPassword")}
      />
      <LoadingButton type="submit" loading={loading} variant="contained" fullWidth sx={{ mt: 3, mb: 2 }}>
        {intl.formatMessage({
          description: "SignUp: Sign up button",
          defaultMessage: "Sign Up",
          id: "Y8xWGf",
        })}
      </LoadingButton>
      <Collapse in={open && !!error}>
        <Alert
          severity="error"
          action={
            <IconButton aria-label="close" color="inherit" size="small" onClick={onAlert}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {error}
        </Alert>
      </Collapse>
    </form>
  );
};

export default SignUpForm;

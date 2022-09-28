import { SubmitHandler, useForm } from "react-hook-form";
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

const schema = yup
  .object()
  .shape({
    displayName: yup.string().required("We need to call you something"),
    email: yup.string().required("Email is required"),
    password: yup.string().min(8, "Password is too short - should be 8 chars minimum").required("Password is required"),
    passwordConfirmation: yup.string().oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();

const SignUpForm = ({ error, open, loading, onAlert, onSubmit }: SignUpFormProps) => {
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
        label="What should we call you?"
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
        label="What is your first name?"
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
        label="What is your last name?"
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
        label="What's your email?"
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
        label="What's your phone number?"
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
        label="Create a password"
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
        label="Confirm password"
        autoComplete="confirmPassword"
        error={!!errors?.confirmPassword}
        helperText={errors?.confirmPassword?.message}
        {...register("confirmPassword")}
      />
      <LoadingButton type="submit" loading={loading} variant="contained" fullWidth sx={{ mt: 3, mb: 2 }}>
        Sign Up
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

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CloseIcon from "@mui/icons-material/Close";
import { LoadingButton } from "@mui/lab";
import { Alert, Collapse, IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import * as yup from "yup";

export interface IFormSignUp {
  displayName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
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
        id="displayName"
        label="What should we call you?"
        autoComplete="password"
        type="displayName"
        error={!!errors?.displayName}
        helperText={errors?.displayName?.message}
        {...register("displayName")}
      />
      <TextField
        margin="normal"
        type="email"
        fullWidth
        id="email"
        label="What's your email?"
        autoComplete="email"
        error={!!errors?.email}
        helperText={errors?.email?.message}
        {...register("email")}
      />
      <TextField
        type="password"
        margin="normal"
        fullWidth
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
        id="passwordConfirmation"
        label="Confirm password"
        autoComplete="passwordConfirmation"
        error={!!errors?.passwordConfirmation}
        helperText={errors?.passwordConfirmation?.message}
        {...register("passwordConfirmation")}
      />
      <LoadingButton type="submit" fullWidth loading={loading} variant="contained" sx={{ mt: 3, mb: 2 }}>
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

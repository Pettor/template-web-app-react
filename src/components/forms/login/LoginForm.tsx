import { SubmitHandler, useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { yupResolver } from "@hookform/resolvers/yup";
import CloseIcon from "@mui/icons-material/Close";
import LoadingButton from "@mui/lab/LoadingButton";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import * as yup from "yup";

export interface FormLogin {
  email: string;
  password: string;
}

export interface LoginFormProps {
  error: string;
  open: boolean;
  loading: boolean;
  onAlert: () => void;
  onSubmit: SubmitHandler<FormLogin>;
}

function LoginForm({ error, open, loading, onAlert, onSubmit }: LoginFormProps) {
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
  } = useForm<FormLogin>({
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
}

export default LoginForm;

import { SubmitHandler, useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { yupResolver } from "@hookform/resolvers/yup";
import CloseIcon from "@mui/icons-material/Close";
import LoadingButton from "@mui/lab/LoadingButton";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Collapse from "@mui/material/Collapse";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import * as yup from "yup";

export interface IFormLogin {
  email: string;
  password: string;
  remember: boolean;
}

export interface LoginFormProps {
  error: string;
  open: boolean;
  loading: boolean;
  onAlert: () => void;
  onSubmit: SubmitHandler<IFormLogin>;
}

const schema = yup
  .object()
  .shape({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
    remember: yup.boolean(),
  })
  .required();

const LoginForm = ({ error, open, loading, onAlert, onSubmit }: LoginFormProps) => {
  const intl = useIntl();

  const {
    handleSubmit: handleFormSubmit,
    register,
    formState: { errors },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleFormSubmit(onSubmit)}>
      <TextField
        margin="normal"
        fullWidth
        id="email"
        label={intl.formatMessage({
          description: "Login: Email label",
          defaultMessage: "Email Address",
          id: "UyAY+T",
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
          description: "Login: Password label",
          defaultMessage: "Password",
          id: "dPQCQO",
        })}
        autoComplete="current-password"
        autoFocus
        type="password"
        error={!!errors?.password}
        helperText={errors?.password?.message}
        {...register("password")}
      />
      <Stack direction="row">
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label={intl.formatMessage({
            description: "Login: Remember me button",
            defaultMessage: "Remember me",
            id: "Q0ozip",
          })}
          {...register("remember")}
        />
        <Box sx={{ width: "100%", display: "flex", flex: 1, justifyContent: "flex-end" }}>
          <LoadingButton type="submit" loading={loading} variant="contained" sx={{ mt: 3, mb: 2, width: 150 }}>
            {intl.formatMessage({
              description: "Login: Sign in button",
              defaultMessage: "Sign in",
              id: "ehhtmv",
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
};

export default LoginForm;

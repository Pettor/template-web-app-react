import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormLogin } from "../../components/forms/login/LoginForm";
import LoginView from "../../components/views/login/LoginView";
import useAuth from "../../libs/auth/hooks/UseAuth";

export default function SignIn() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  function handleAlert() {
    setOpen(false);
  }

  async function handleSubmit(data: FormLogin) {
    setError("");

    const { email, password } = data;
    try {
      setLoading(true);
      await login({ email, password });
      navigate("/");
    } catch (error) {
      setError((error as Error).message);
      setOpen(true);
      setLoading(false);
    }
  }

  function handleForgotPassword() {
    navigate("/forgot-password");
  }

  function handleSignUp() {
    navigate("/sign-up");
  }

  return (
    <LoginView
      loginForm={{
        error,
        open,
        loading,
        onAlert: handleAlert,
        onSubmit: handleSubmit,
      }}
      handleForgotPassword={handleForgotPassword}
      handleSignUp={handleSignUp}
    />
  );
}

import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IFormLogin } from "../../components/forms/login/LoginForm";
import LoginView from "../../components/views/login/LoginView";
import useAuth from "../../libs/auth/hooks/UseAuth";

export default function SignIn() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const handleAlert = () => {
    setOpen(false);
  };

  const handleSubmit: SubmitHandler<IFormLogin> = async (data) => {
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
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  const handleSignUp = () => {
    navigate("/sign-up");
  };

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

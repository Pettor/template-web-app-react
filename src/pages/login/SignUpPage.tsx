import * as React from "react";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IFormSignUp } from "../../components/forms/sign-up/SignUpForm";
import SignUpView from "../../components/views/login/SignUpView";
import useAuth from "../../libs/auth/hooks/UseAuth";

export default function SignIn() {
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleAlert = () => {
    setOpen(false);
  };

  const handleSubmit: SubmitHandler<IFormSignUp> = async (data) => {
    setError("");

    const { email, password, confirmPassword, firstName, lastName, phoneNumber, userName } = data;
    try {
      setLoading(true);
      await signUp({ email, password, confirmPassword, firstName, lastName, phoneNumber, userName });
      navigate("/");
    } catch (error) {
      setError((error as Error).message);
      setOpen(true);
      setLoading(false);
    }
  };

  return (
    <SignUpView
      signUpForm={{
        error,
        open,
        loading,
        onAlert: handleAlert,
        onSubmit: handleSubmit,
      }}
    />
  );
}

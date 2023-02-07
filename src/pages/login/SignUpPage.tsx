import React, { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormSignUp } from "../../components/forms/sign-up/SignUpForm";
import SignUpView from "../../components/views/login/SignUpView";
import useApi from "../../libs/api/hooks/UseApi";

export default function SignIn(): ReactElement {
  const navigate = useNavigate();
  const { post } = useApi();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = React.useState(false);

  function handleAlert(): void {
    setOpen(false);
  }

  async function handleSubmit(data: FormSignUp): Promise<void> {
    setError("");

    try {
      setLoading(true);
      await post("/api/users/self-register", data);
      navigate("/");
    } catch (error) {
      setError((error as Error).message);
      setOpen(true);
      setLoading(false);
    }
  }

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

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormResetPassword } from "../../components/forms/reset-password/ResetPasswordForm";
import ResetPasswordView from "../../components/views/login/ResetPasswordView";
import useApi from "../../libs/api/hooks/UseApi";

export default function SignIn(): React.ReactElement {
  const navigate = useNavigate();
  const { post } = useApi();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = React.useState(false);

  function handleAlert(): void {
    setOpen(false);
  }

  async function handleSubmit(data: FormResetPassword): Promise<void> {
    setError("");

    const { email } = data;
    try {
      setLoading(true);
      await post("/api/users/forgot-password", { email });

      navigate("/");
    } catch (error) {
      setError((error as Error).message);
      setOpen(true);
      setLoading(false);
    }
  }

  return (
    <ResetPasswordView
      resetForm={{
        error,
        open,
        loading,
        onAlert: handleAlert,
        onSubmit: handleSubmit,
      }}
    />
  );
}

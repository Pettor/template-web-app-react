import * as React from "react";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IFormResetPassword } from "../../components/forms/reset-password/ResetPasswordForm";
import ResetPasswordView from "../../components/views/login/ResetPasswordView";
import useApi from "../../libs/api/hooks/UseApi";
import { UserForgotPasswordRequest } from "../../libs/api/service/requests/UserForgotPasswordRequest";
import { GenericResponse } from "../../libs/api/worker/ApiWorkerReponse";

export default function SignIn() {
  const navigate = useNavigate();
  const { makeRequest } = useApi();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleAlert = () => {
    setOpen(false);
  };

  const handleSubmit: SubmitHandler<IFormResetPassword> = async (data) => {
    setError("");

    const { email } = data;
    try {
      setLoading(true);
      await makeRequest<UserForgotPasswordRequest, GenericResponse>({ email });

      navigate("/");
    } catch (error) {
      setError((error as Error).message);
      setOpen(true);
      setLoading(false);
    }
  };

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

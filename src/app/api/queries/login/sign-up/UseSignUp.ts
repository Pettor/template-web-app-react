import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import useApi from "../../../UseApi";
import { SignUpDto } from "./SignUpDto";

export default function useSignUp(): {
  error: AxiosError | null;
  isLoading: boolean;
  submit: (data: SignUpDto) => void;
} {
  const { post } = useApi();
  const navigate = useNavigate();

  const { error, isLoading, mutate } = useMutation<void, AxiosError, SignUpDto>({
    mutationFn: async (data: SignUpDto) => {
      await post("/api/users/self-register", data);
    },
    onSuccess: () => {
      navigate("/");
    },
  });

  return {
    error,
    isLoading,
    submit: mutate,
  };
}

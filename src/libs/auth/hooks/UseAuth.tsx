import { useContext } from "react";
import useApi from "../../api/hooks/UseApi";
import { AuthContext } from "../context/AuthContext";
import { AuthLogin } from "../types/AuthLogin";
import { AuthForgotPassword } from "../types/AuthResetPassword";
import { AuthSignUp } from "../types/AuthSignUp";

const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);
  const api = useApi();

  async function login(data: AuthLogin) {
    await api.login(data);
    dispatch({
      type: "auth/login",
      payload: {
        user: data.email,
      },
    });
  }

  async function logout() {
    await api.logout();
    dispatch({
      type: "auth/logout",
    });
  }

  async function resetPassword(data: AuthForgotPassword) {
    await api.resetPassword(data);
    dispatch({
      type: "auth/reset-password",
    });
  }

  async function signUp(data: AuthSignUp) {
    await api.signUp(data);
    dispatch({
      type: "auth/sign-up",
    });
  }

  return {
    ...state,
    login,
    logout,
    resetPassword,
    signUp,
  };
};

export default useAuth;

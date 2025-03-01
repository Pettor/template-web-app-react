import { useContext } from "react";
import type { LoginData } from "api-package";
import { usePostLoginMutate, usePostLogoutMutate } from "api-package";
import { AuthContext } from "./AuthContext";
import type { AuthStatus } from "./AuthReducer";

export function useAuth(): {
  status: AuthStatus;
  login(data: LoginData): Promise<void>;
  logout(): Promise<void>;
  loginLoading: boolean;
  logoutLoading: boolean;
} {
  const {
    state: { status },
    dispatch,
  } = useContext(AuthContext);
  const { mutateAsync: loginFunc, isPending: loginLoading } = usePostLoginMutate();
  const { mutateAsync: logoutFunc, isPending: logoutLoading } = usePostLogoutMutate();

  async function login(data: LoginData): Promise<void> {
    await loginFunc(data);
    dispatch({
      type: "auth/login",
    });
  }

  async function logout(): Promise<void> {
    await logoutFunc();
    dispatch({
      type: "auth/logout",
    });
  }

  return {
    status,
    login,
    logout,
    loginLoading,
    logoutLoading,
  };
}

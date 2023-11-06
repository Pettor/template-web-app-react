import { useContext } from "react";
import type { LoginData } from "core-api";
import { useLoginByData, useLogout } from "core-api";
import { AuthContext } from "./AuthContext";
import type { AuthStatus } from "./AuthReducer";

export function useAuth(): {
  status: AuthStatus;
  login(data: LoginData): Promise<void>;
  logout(): Promise<void>;
} {
  const {
    state: { status },
    dispatch,
  } = useContext(AuthContext);
  const { mutateAsync: loginFunc } = useLoginByData();
  const { mutateAsync: logoutFunc } = useLogout();

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
  };
}

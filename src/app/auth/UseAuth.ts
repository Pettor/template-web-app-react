import { useContext } from "react";
import type { RequestTokenDto } from "../api/queries/login/token-request/RequestTokenDto";
import useApi from "../api/UseApi";
import { AuthContext } from "./AuthContext";
import type { AuthStatus } from "./AuthReducer";

export default function useAuth(): {
  status: AuthStatus;
  login(data: RequestTokenDto): Promise<void>;
  logout(): Promise<void>;
} {
  const {
    state: { status },
    dispatch,
  } = useContext(AuthContext);
  const api = useApi();

  async function login(data: RequestTokenDto): Promise<void> {
    await api.requestToken(data);
    dispatch({
      type: "auth/login",
    });
  }

  async function logout(): Promise<void> {
    await api.logout();
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

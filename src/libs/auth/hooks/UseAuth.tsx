import { useContext } from "react";
import useApi from "../../api/hooks/UseApi";
import { TokenRequestRequest } from "../../api/service/requests/TokenRequestRequest";
import { AuthContext } from "../context/AuthContext";
import { AuthState } from "../reducer/AuthReducer";

interface UseAuth extends AuthState {
  login(data: TokenRequestRequest): Promise<void>;
  logout(): Promise<void>;
}

function useAuth(): UseAuth {
  const { state, dispatch } = useContext(AuthContext);
  const api = useApi();

  async function login(data: TokenRequestRequest): Promise<void> {
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
    ...state,
    login,
    logout,
  };
}

export default useAuth;

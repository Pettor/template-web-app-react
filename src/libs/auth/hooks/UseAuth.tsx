import { useContext } from "react";
import useApi from "../../api/hooks/UseApi";
import { TokenRequestRequest } from "../../api/service/requests/TokenRequestRequest";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);
  const api = useApi();

  async function login(data: TokenRequestRequest) {
    const refreshToken = await api.requestToken(data);
    dispatch({
      type: "auth/login",
      payload: {
        refreshToken,
      },
    });
  }

  async function logout() {
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
};

export default useAuth;

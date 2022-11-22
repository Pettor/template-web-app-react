import { ReactNode, createContext, useEffect, useMemo, useReducer } from "react";
import useApi from "../../api/hooks/UseApi";
import { useLocalStorage } from "../../storage/local-storage/hooks/UseLocalStorage";
import { AuthActions, AuthReducer, AuthState } from "../reducer/AuthReducer";
import { RefreshToken } from "../types/RefreshToken";

interface IAuthContext {
  state: AuthState;
  dispatch: React.Dispatch<AuthActions>;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const initialState: AuthState = {
  status: "idle",
  data: null,
};

interface Props {
  children: ReactNode;
}

function AuthProvider({ children }: Props) {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const api = useApi();

  const { data } = state;
  const [refreshToken, setRefreshToken] = useLocalStorage<RefreshToken | null>("refresh-token", null);

  useEffect(() => {
    // On refresh check if auth exist or not
    const tryRefreshToken = async (): Promise<void> => {
      if (!refreshToken) {
        dispatch({ type: "auth/logout" });
        return;
      }
      try {
        const { refreshToken: newRefreshToken } = await api.refreshToken(refreshToken);
        if (!newRefreshToken) {
          dispatch({ type: "auth/logout" });
          return;
        }

        setRefreshToken(newRefreshToken);
        dispatch({ type: "auth/login", payload: { refreshToken: newRefreshToken } });
      } catch (errro) {
        dispatch({ type: "auth/logout" });
      }
    };

    tryRefreshToken();
  }, []);

  useEffect(() => {
    if (!data?.refreshToken) {
      return;
    }

    setRefreshToken(data.refreshToken);
  }, [data?.refreshToken]);

  const value = useMemo(() => {
    return {
      state,
      dispatch,
    };
  }, [state]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export type { IAuthContext };
export { AuthProvider, AuthContext };

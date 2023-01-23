import { ReactNode, createContext, useMemo, useReducer } from "react";
import { useQuery } from "react-query";
import useApi from "../../api/hooks/UseApi";
import { AuthActions, AuthReducer, AuthState } from "../reducer/AuthReducer";

interface IAuthContext {
  state: AuthState;
  dispatch: React.Dispatch<AuthActions>;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const initialState: AuthState = {
  status: "idle",
};

interface Props {
  children: ReactNode;
}

function AuthProvider({ children }: Props) {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const api = useApi();

  useQuery({
    queryKey: ["refresh-token-init"],
    queryFn: async () => {
      try {
        const success = await api.refreshToken();
        if (!success) {
          dispatch({ type: "auth/logout" });
          return;
        }

        dispatch({ type: "auth/login" });
      } catch (errro) {
        dispatch({ type: "auth/logout" });
      }
    },
    refetchOnWindowFocus: false,
  });

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

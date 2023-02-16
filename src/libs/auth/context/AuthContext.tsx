import { ReactElement, ReactNode, createContext, useEffect, useMemo, useReducer } from "react";
import { useQuery } from "@tanstack/react-query";
import useApi from "../../api/hooks/UseApi";
import AuthReducer, { AuthActions, AuthState } from "../reducer/AuthReducer";

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

function AuthProvider({ children }: Props): ReactElement {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const api = useApi();

  useQuery({
    queryKey: ["auth-refresh-token"],
    queryFn: async () => {
      try {
        await api.refreshToken();
        dispatch({ type: "auth/login" });
      } catch (errro) {
        dispatch({ type: "auth/logout" });
      }
    },
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  const value = useMemo(() => {
    return {
      state,
      dispatch,
    };
  }, [state]);

  useEffect(() => {
    const sub = api.subscribe(() => {
      dispatch({ type: "auth/logout" });
    });

    return (): void => sub.unsubscribe();
  });

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export type { IAuthContext };
export { AuthProvider, AuthContext };

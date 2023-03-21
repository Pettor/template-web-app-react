import type { ReactElement, ReactNode } from "react";
import { createContext, useEffect, useMemo, useReducer } from "react";
import useApi from "../api/UseApi";
import type { AuthActions, AuthState } from "./AuthReducer";
import AuthReducer from "./AuthReducer";
import useRunOnce from "~/libs/react/hooks/UseRunOnce";

interface AuthContext {
  state: AuthState;
  dispatch: React.Dispatch<AuthActions>;
}

const AuthContext = createContext<AuthContext>({} as AuthContext);

const initialState: AuthState = {
  status: "idle",
};

interface Props {
  children: ReactNode;
}

function AuthProvider({ children }: Props): ReactElement {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const api = useApi();

  useRunOnce({
    func: async () => {
      try {
        // Run once on app load to check if the user is logged in
        await api.refreshToken();
        dispatch({ type: "auth/login" });
      } catch (error) {
        dispatch({ type: "auth/logout" });
      }
    },
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

export type { AuthContext as IAuthContext };
export { AuthProvider, AuthContext };

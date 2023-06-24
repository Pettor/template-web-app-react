import type { ReactElement, ReactNode } from "react";
import { createContext, useEffect, useMemo, useReducer } from "react";
import { useEffectOnce } from "usehooks-ts";
import { useApi } from "../api/UseApi";
import type { AuthActions, AuthState } from "./AuthReducer";
import { AuthReducer } from "./AuthReducer";

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

  useEffectOnce(() => {
    (async (): Promise<void> => {
      try {
        // Run once on app load to check if the user is logged in
        await api.refreshToken();
        dispatch({ type: "auth/login" });
      } catch (error) {
        dispatch({ type: "auth/logout" });
      }
    })();
  });

  const value = useMemo(() => {
    return {
      state,
      dispatch,
    };
  }, [state]);

  useEffect(() => {
    const unsubscribe = api.subscribe(() => {
      dispatch({ type: "auth/logout" });
    });

    return (): void => unsubscribe();
  });

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export type { AuthContext as IAuthContext };
export { AuthProvider, AuthContext };

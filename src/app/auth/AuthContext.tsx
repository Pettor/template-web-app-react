import { ReactElement, ReactNode, createContext, useEffect, useMemo, useReducer } from "react";
import useRunOnce from "../../libs/react/hooks/UseRunOnce";
import useApi from "../api/UseApi";
import AuthReducer, { AuthActions, AuthState } from "./AuthReducer";

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
        console.log("HEJ1");
        await api.refreshToken();
        console.log("HEJ");
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

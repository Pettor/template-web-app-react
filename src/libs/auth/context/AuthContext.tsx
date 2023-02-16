import { ReactElement, ReactNode, createContext, useEffect, useMemo, useReducer } from "react";
import useApi from "../../api/hooks/UseApi";
import useRunOnce from "../../react/hooks/UseRunOnce";
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

export type { IAuthContext };
export { AuthProvider, AuthContext };

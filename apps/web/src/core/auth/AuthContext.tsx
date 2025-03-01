import type { Dispatch, ReactElement, ReactNode } from "react";
import { createContext, useMemo, useReducer } from "react";
import { usePostRefreshTokenMutate } from "api-package";
import { useRunOnce } from "react-package";
import type { AuthActions, AuthState } from "./AuthReducer";
import { AuthReducer } from "./AuthReducer";

interface IAuthContext {
  state: AuthState;
  dispatch: Dispatch<AuthActions>;
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
  const { mutateAsync: refreshToken } = usePostRefreshTokenMutate();

  useRunOnce({
    func: async () => {
      try {
        // Run once on app load to check if the user is logged in
        await refreshToken();
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

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export type { IAuthContext };
export { AuthProvider, AuthContext };

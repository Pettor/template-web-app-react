import { ReactNode, createContext, useEffect, useMemo, useReducer } from "react";
import useApi from "../../api/hooks/UseApi";
import { AuthActions, AuthReducer, AuthState } from "../reducer/AuthReducer";

type IAuthContext = {
  state: AuthState;
  dispatch: React.Dispatch<AuthActions>;
};

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const initialState: AuthState = {
  status: "idle",
  data: null,
};

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const api = useApi();

  useEffect(() => {
    // On refresh check if auth exist or not
    const checkAuth = async (): Promise<void> => {
      if (await api.checkAuth()) {
        dispatch({
          type: "auth/login",
          payload: {
            user: "",
          },
        });

        return;
      }

      dispatch({
        type: "auth/logout",
      });
    };

    checkAuth();
  }, []);

  const value = useMemo(() => {
    return {
      state,
      dispatch,
    };
  }, [state]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export type { IAuthContext };
export { AuthProvider, AuthContext };

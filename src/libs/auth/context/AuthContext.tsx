import { ReactNode, createContext, useEffect, useMemo, useReducer } from "react";
import { useQuery } from "react-query";
import useApi from "../../api/hooks/UseApi";
import { ApiError } from "../../api/worker/ApiWorkerReponse";
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
    api.subscribe(() => {
      console.log("HEJ");
      dispatch({ type: "auth/logout" });
    });
  });

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export type { IAuthContext };
export { AuthProvider, AuthContext };

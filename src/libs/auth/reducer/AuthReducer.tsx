import { AuthData } from "../types/AuthData";

type AuthActions = { type: "auth/loading" } | { type: "auth/login"; payload: AuthData } | { type: "auth/logout" };

interface AuthState {
  status: "idle" | "authenticating" | "authenticated";
  data: AuthData | null;
}

const AuthReducer = (prev: AuthState, action: AuthActions): AuthState => {
  switch (action.type) {
    case "auth/loading": {
      return { ...prev, status: "idle" };
    }
    case "auth/login":
      return { ...prev, data: action.payload, status: "authenticated" };
    case "auth/logout":
      return { ...prev, data: null, status: "authenticating" };
    default:
      return prev;
  }
};

export type { AuthState, AuthActions };
export { AuthReducer };

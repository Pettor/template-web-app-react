type AuthActions = { type: "auth/loading" } | { type: "auth/login" } | { type: "auth/logout" };

interface AuthState {
  status: "idle" | "authenticating" | "authenticated";
}

function AuthReducer(prev: AuthState, action: AuthActions): AuthState {
  switch (action.type) {
    case "auth/loading": {
      return { ...prev, status: "idle" };
    }
    case "auth/login": {
      return { ...prev, status: "authenticated" };
    }
    case "auth/logout":
      return { ...prev, status: "authenticating" };
    default:
      return prev;
  }
}

export type { AuthState, AuthActions };
export { AuthReducer };

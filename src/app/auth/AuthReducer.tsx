import produce from "immer";

type AuthActions = { type: "auth/loading" } | { type: "auth/login" } | { type: "auth/logout" };
type AuthStatus = "idle" | "authenticating" | "authenticated";

interface AuthState {
  status: AuthStatus;
}

export default function AuthReducer(baseState: AuthState, action: AuthActions): AuthState {
  const { type } = action;
  return produce<AuthState>(baseState, (draft) => {
    switch (type) {
      case "auth/loading":
        draft.status = "idle";
        break;
      case "auth/login":
        draft.status = "authenticated";
        break;
      case "auth/logout":
        draft.status = "authenticating";
        break;
    }
  });
}

export type { AuthState, AuthActions, AuthStatus };

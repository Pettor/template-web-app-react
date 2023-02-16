type AuthActions = { type: "auth/loading" } | { type: "auth/login" } | { type: "auth/logout" };
import produce from "immer";

interface AuthState {
  status: "idle" | "authenticating" | "authenticated";
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

export type { AuthState, AuthActions };

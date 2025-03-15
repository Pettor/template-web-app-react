import { produce } from "immer";
import type { AuthState } from "~/classes/auth/AuthState";
import type { AuthStatus } from "~/classes/auth/AuthStatus";

type AuthActions = { type: "auth/loading" } | { type: "auth/login" } | { type: "auth/logout" };

export interface AuthReducerProps extends AuthState {}

export function AuthReducer(baseState: AuthReducerProps, action: AuthActions): AuthReducerProps {
  const { type } = action;
  return produce<AuthReducerProps>(baseState, (draft) => {
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

export type { AuthActions, AuthStatus };

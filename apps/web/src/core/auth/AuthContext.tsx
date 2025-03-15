import type { Dispatch } from "react";
import { createContext } from "react";
import type { AuthActions } from "./AuthReducer";
import type { AuthState } from "~/classes/auth/AuthState";

export interface IAuthContext {
  state: AuthState;
  dispatch: Dispatch<AuthActions>;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

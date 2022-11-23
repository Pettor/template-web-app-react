import { LocalStorage } from "../../storage/local-storage/LocalStorage";
import { AuthData } from "../types/AuthData";
import { RefreshToken } from "../types/RefreshToken";

type AuthActions = { type: "auth/loading" } | { type: "auth/login"; payload: AuthData } | { type: "auth/logout" };

interface AuthState {
  status: "idle" | "authenticating" | "authenticated";
  data: AuthData | null;
}

const refreshTokenStorage = new LocalStorage<RefreshToken | null>("refresh-token");

const AuthReducer = (prev: AuthState, action: AuthActions): AuthState => {
  switch (action.type) {
    case "auth/loading": {
      return { ...prev, status: "idle" };
    }
    case "auth/login": {
      const { refreshToken } = action.payload;
      refreshTokenStorage.set(refreshToken);
      return { ...prev, data: action.payload, status: "authenticated" };
    }
    case "auth/logout":
      refreshTokenStorage.set(null);
      return { ...prev, data: null, status: "authenticating" };
    default:
      return prev;
  }
};

export type { AuthState, AuthActions };
export { AuthReducer };

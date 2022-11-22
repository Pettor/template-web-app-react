import { JwtToken } from "./JwtToken";

export interface RefreshToken {
  refreshToken: JwtToken;
  refreshTokenExpiryTime: Date;
}

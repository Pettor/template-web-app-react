import { JwtToken } from "./JwtToken";

export type RefreshToken = {
  refreshToken: JwtToken;
  refreshTokenExpiryTime: Date;
};

export interface TokenDto {
  token: string;
  refreshTokenExpiryTime: string;
}

export interface RequestTokenDto {
  email: string;
  password: string;
}

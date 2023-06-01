export interface IUserState {
  accessToken: string | null;
}

export interface ILoginToken {
  token: string;
  refreshToken: string;
  tokenExpiredAt: string;
  refreshTokenExpiredAt: string;
}

export interface ILoginTokenItem {
  item: ILoginToken;
}
export interface ILoginResponse {
  adminLogin: ILoginTokenItem;
}

export interface ISilentRefresh {
  adminLoginRefreshToken: ILoginTokenItem;
}

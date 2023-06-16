export interface User {
  loginId: string;
  password: string;
}

export interface Msg {
  message: string;
}

export interface Jwt {
  accessToken: string;
}

export interface Payload {
  sub: string;
  loginId: string;
  businessId?: string;
  businessName?: string;
}

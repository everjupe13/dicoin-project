export type AuthLoginPayload = {
  email: string
  password: string
}

export type AuthLoginResponse = {
  refreshToken: string
  accessToken: string
}

export type AuthSignupPayload = {
  email: string
  fullName: string
  password: string
}

export type AuthSignupResponse = {
  refreshToken: string
  accessToken: string
}

export type AuthRefreshResponse = {
  refreshToken: string
  accessToken: string
}

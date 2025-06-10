export type AuthLoginPayload = {
  email: string
  password: string
}

export type AuthLoginResponse = {
  refresh_token: string
  access_token: string
}

export type AuthSignupPayload = {
  email: string
  password: string
}

export type AuthSignupResponse = {
  refresh_token: string
  access_token: string
}

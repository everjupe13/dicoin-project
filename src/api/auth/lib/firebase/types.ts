import { type OAuthCredential, type UserCredential } from 'firebase/auth'

export type FirebaseAuthError = {
  errorMessage: string
  errorCode: string
  errorData: { email?: string; credential: OAuthCredential | null }
}

export type FirebaseUserCredentials = {
  user: UserCredential['user']
  token: OAuthCredential['accessToken']
}

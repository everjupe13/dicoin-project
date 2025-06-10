import { initializeApp } from 'firebase/app'
import {
  type AuthError,
  beforeAuthStateChanged,
  browserLocalPersistence,
  getAuth,
  GoogleAuthProvider,
  type OAuthCredential,
  onAuthStateChanged,
  setPersistence,
  signInWithPopup,
  type User,
  type UserCredential
} from 'firebase/auth'

import type { FirebaseAuthError, FirebaseUserCredentials } from './types'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export const onAuthChanged = (f: (user?: User | null) => void) =>
  onAuthStateChanged(auth, f)

export const beforeAuthChanged = (f: () => void) =>
  beforeAuthStateChanged(auth, f)

const googleAuthProvider = new GoogleAuthProvider()

export const openGoogleAuthPopup = async (): Promise<
  FirebaseUserCredentials | FirebaseAuthError
> => {
  try {
    await setPersistence(auth, browserLocalPersistence)

    const result: UserCredential = await signInWithPopup(
      auth,
      googleAuthProvider
    )
    const credential: OAuthCredential | null =
      GoogleAuthProvider.credentialFromResult(result)

    const token = credential?.accessToken
    const user = result.user
    // IdP data available using getAdditionalUserInfo(result)
    return {
      user,
      token
    }
  } catch (error: unknown) {
    const typedError = error as AuthError
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(typedError)

    return {
      errorMessage: typedError?.message,
      errorCode: typedError?.code,
      errorData: { email: typedError?.customData?.email, credential }
    }
  }
}

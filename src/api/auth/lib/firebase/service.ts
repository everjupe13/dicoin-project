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
  apiKey: 'AIzaSyB4maes2N9qN72FI3aRks0lQgBVbC_I2So',
  authDomain: 'dicoin-web.firebaseapp.com',
  projectId: 'dicoin-web',
  storageBucket: 'dicoin-web.appspot.com',
  messagingSenderId: '41462100831',
  appId: '1:41462100831:web:f54022a1767638bd0d7cea'
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

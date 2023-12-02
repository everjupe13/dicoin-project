import { initializeApp } from 'firebase/app'
import {
  AuthError,
  getAuth,
  GoogleAuthProvider,
  OAuthCredential,
  signInWithPopup,
  UserCredential
} from 'firebase/auth'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB4maes2N9qN72FI3aRks0lQgBVbC_I2So',
  authDomain: 'dicoin-web.firebaseapp.com',
  projectId: 'dicoin-web',
  storageBucket: 'dicoin-web.appspot.com',
  messagingSenderId: '41462100831',
  appId: '1:41462100831:web:f54022a1767638bd0d7cea'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const openGoogleAuthPopup = async () => {
  try {
    const result: UserCredential = await signInWithPopup(auth, provider)
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
    const errorCode = typedError.code
    const errorMessage = typedError.message
    // The email of the user's account used.
    const email = typedError.customData.email
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(typedError)

    console.error(errorCode, errorMessage, email, credential)
    return { error: errorMessage }
  }
}

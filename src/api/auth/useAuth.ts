import { auth, onAuthChanged, openGoogleAuthPopup } from './firebase.service'

export const useAuth = () => {
  return {
    onAuthChanged,
    firebaseAuth: auth,
    openGoogleAuthPopup
  }
}

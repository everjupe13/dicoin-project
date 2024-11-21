export type {
  FirebaseAuthError,
  FirebaseUserCredentials
} from './firebase.types'
export * from './hooks/useAuth'
export { auth, beforeAuthChanged, onAuthChanged } from './lib/firebase/service'

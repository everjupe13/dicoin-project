export * from './hooks/useAuth'
export { auth, beforeAuthChanged, onAuthChanged } from './lib/firebase/service'
export type {
  FirebaseAuthError,
  FirebaseUserCredentials
} from './lib/firebase/types'

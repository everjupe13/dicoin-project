import { createContext } from 'react'

export type AuthContextType = {
  beforeLogoutHook?: () => void
  openGoogleAuthPopup?: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null)

import { createContext } from 'react'

export interface AuthContextType {
  // authByExternalPopup?: () => Promise<User | null>
  // logout: () => Promise<void>
  // readonly user: User | null
  // readonly loading: boolean
}

export const AuthContext = createContext<AuthContextType | null>(null)

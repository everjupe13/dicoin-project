import { createContext } from 'react'

import { User } from '@/types/user'

export type AuthContextType = {
  authByExternalPopup?: () => Promise<User | null>
  user: User | null
}

export const AuthContext = createContext<AuthContextType | null>(null)

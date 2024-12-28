import { createContext } from 'react'

import { User } from '@/shared/types'

export interface AuthContextType {
  authByExternalPopup?: () => Promise<User | null>
  readonly user: User | null

  readonly loading: boolean
}

export const AuthContext = createContext<AuthContextType | null>(null)

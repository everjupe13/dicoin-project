import { type ReactNode } from 'react'

import { AuthContext } from './context'

export interface AuthProviderProps {
  children?: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>
}

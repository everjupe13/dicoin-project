import { useContext } from 'react'

import { AuthContext, type AuthContextType } from '../lib/context'

export function useAuthStore(): AuthContextType {
  const authContext = useContext(AuthContext)

  if (!authContext) {
    throw new Error('AuthContextConsumer call without AuthContextProvider')
  }

  return authContext
}

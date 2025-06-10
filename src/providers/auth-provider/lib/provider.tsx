import { type ReactNode, useEffect } from 'react'

import { useAuthStore } from '@/components/modules/auth'

// TODO react query request
// import { useUserStore } from '@/components/modules/user'
import { AuthContext } from './context'

export interface AuthProviderProps {
  children?: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { init: initAuth, isInited: isAuthInited } = useAuthStore()
  const isInited = isAuthInited

  useEffect(() => {
    const getUser = async () => {
      await initAuth()
    }

    getUser()
  }, [initAuth, isAuthInited])

  if (!isInited) {
    return null
  }

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}

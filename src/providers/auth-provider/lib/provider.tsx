import { type ReactNode, useEffect } from 'react'

// TODO react query request
// import { useUserStore } from '@/components/modules/user'
import { useCurrentUser } from '@/api/modules/user'
import { useAuthStore } from '@/components/modules/auth'

import { AuthContext } from './context'

export interface AuthProviderProps {
  children?: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { init: initAuth, isInited: isAuthInited } = useAuthStore()
  useCurrentUser()
  // const { data, isPending, refetch } = useCurrentUser()
  const isInited = isAuthInited

  useEffect(() => {
    const getAuth = async () => {
      await initAuth()
    }

    getAuth()
  }, [initAuth, isAuthInited])

  if (!isInited) {
    return null
  }

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}

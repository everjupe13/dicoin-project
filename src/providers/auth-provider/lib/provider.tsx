import { type ReactNode, useCallback, useEffect, useState } from 'react'

import { beforeAuthChanged, onAuthChanged, useAuth } from '@/api/auth'
import type { User } from '@/shared/types'

import { AuthContext, type AuthContextType } from './context'

export interface AuthProviderProps {
  children?: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const { authByGooglePopup } = useAuth()

  const authByExternalPopup = useCallback(async () => {
    const userResponse = await authByGooglePopup()

    if (userResponse.data) {
      return userResponse.data
    }

    return null
  }, [authByGooglePopup])

  const contextValue: AuthContextType = {
    user,
    loading,

    authByExternalPopup
  }

  useEffect(() => {
    beforeAuthChanged(() => {
      setLoading(true)
    })

    onAuthChanged(user => {
      setLoading(false)

      if (user) {
        setUser(user)
      }
    })
  }, [])

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

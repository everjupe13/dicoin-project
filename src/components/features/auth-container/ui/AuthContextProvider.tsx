import { FC, ReactNode } from 'react'

import { openGoogleAuthPopup } from '@/api/auth/auth.service'

import { AuthContext, AuthContextType } from '../model/context'
import { useAuthStore } from '../model/store'

type Props = {
  children?: ReactNode
}
const AuthContextProvider: FC<Props> = ({ children }) => {
  const { setUserData } = useAuthStore()

  const logoutActionOne = () => {
    // console.log('log1')
  }
  const logoutActionTwo = () => {
    // console.log('log2')
  }

  const authProviderContext: AuthContextType = {
    beforeLogoutHook: () => {
      logoutActionOne()
      logoutActionTwo()
    },
    openGoogleAuthPopup: async () => {
      const authResult = await openGoogleAuthPopup()
      if (!authResult.error && authResult.user) {
        setUserData(authResult.user)
      }
    }
  }

  return (
    <AuthContext.Provider value={authProviderContext}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider

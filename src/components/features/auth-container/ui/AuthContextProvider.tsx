import { FC, ReactNode } from 'react'

import { openGoogleAuthPopup } from '@/api/auth/firebase.service'

import { AuthContext, AuthContextType } from '../model/context'
import { useAuthStore } from '../model/store'

type Props = {
  children?: ReactNode
}
const AuthContextProvider: FC<Props> = ({ children }) => {
  const { setUserData } = useAuthStore()

  const authProviderContext: AuthContextType = {
    openGoogleAuthPopup: async () => {
      const authResult = await openGoogleAuthPopup()
      console.log(authResult)

      if ('user' in authResult && authResult.user) {
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

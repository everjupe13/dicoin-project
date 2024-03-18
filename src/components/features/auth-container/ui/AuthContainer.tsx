import { FC, ReactNode, useEffect } from 'react'

import { useAuth } from '@/api/auth'

import { useAuthStore } from '../model/store'
import AuthContextProvider from './AuthContextProvider'

type Props = {
  children?: ReactNode
}

const AuhtContainer: FC<Props> = ({ children }) => {
  const { onAuthChanged } = useAuth()
  const { setUserData } = useAuthStore()
  useEffect(() => {
    onAuthChanged(user => {
      if (user) {
        setUserData(user)
      }
    })
  }, [])

  return <AuthContextProvider>{children}</AuthContextProvider>
}

export default AuhtContainer

import { FC, useMemo } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useAuthStore } from '@/components/features/auth-container'

type Props = {
  protectedProperty?: boolean
  isProtectedActive?: boolean
}

export const ProtectedRouteAuth: FC<Props> = ({
  protectedProperty,
  isProtectedActive
}) => {
  const userData = useAuthStore(state => state.userData)
  const isAnononymousUser = userData === null

  const isAllowed = useMemo(
    () =>
      isProtectedActive
        ? protectedProperty === undefined
          ? isAnononymousUser
          : protectedProperty
        : true,
    [isAnononymousUser, isProtectedActive, protectedProperty]
  )

  if (!isAllowed) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}

import { FC, useMemo } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useAuthStore } from '@/providers/auth-provider'

type Props = {
  protectedProperty?: boolean
  isProtectedActive?: boolean
}

export const ProtectedRouteAuth: FC<Props> = ({
  protectedProperty,
  isProtectedActive
}) => {
  const { user } = useAuthStore()
  const isAnononymousUser = user === null

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

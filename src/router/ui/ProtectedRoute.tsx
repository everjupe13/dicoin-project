import { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

type Props = {
  user?: boolean
}

export const ProtectedRoute: FC<Props> = ({ user }) => {
  if (!user) {
    return <Navigate to="/auth/signin" replace />
  }

  return <Outlet />
}

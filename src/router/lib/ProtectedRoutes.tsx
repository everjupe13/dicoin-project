import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { useAuthStore } from '@/components/modules/auth'
import { ROUTES, SEARCH_PARAMS } from '@/shared/const'

import { PERSON_ROLES, PersonRole } from '../types'

function checkAccess(type: PersonRole, isAuth: boolean) {
  const mapAccessRights = {
    [PERSON_ROLES.GUEST]: !isAuth,
    [PERSON_ROLES.LOGGED]: isAuth
  }

  return mapAccessRights[type]
}

function getNavigateUrl(
  type: PersonRole,
  currentRoute: string,
  saveRedirectUrl: boolean
) {
  const mapRedirectUrl = {
    [PERSON_ROLES.GUEST]: ROUTES.HOME,
    [PERSON_ROLES.LOGGED]: ROUTES.AUTH.SIGN_IN
  }

  const searchParams = new URLSearchParams()
  if (saveRedirectUrl && currentRoute && type === PERSON_ROLES.LOGGED) {
    searchParams.set(SEARCH_PARAMS.REDIRECT, currentRoute)
  }

  return [mapRedirectUrl[type], searchParams.toString()]
    .filter(Boolean)
    .join('?')
}

export interface ProtectedRouteProps {
  withRedirect?: boolean
  type?: PersonRole
}

export function ProtectedRoutes({
  withRedirect = true,
  type = 'logged'
}: ProtectedRouteProps) {
  const location = useLocation()

  const { isAuthed, isLoading } = useAuthStore()

  const isAllowed = checkAccess(type, isAuthed)
  const redirectUrl = getNavigateUrl(type, location.pathname, withRedirect)

  if (isLoading) {
    return null
  }

  if (!isAllowed) {
    return <Navigate to={redirectUrl} replace />
  }

  return <Outlet />
}

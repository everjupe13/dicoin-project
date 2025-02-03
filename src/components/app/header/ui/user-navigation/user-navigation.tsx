import { User } from '@/shared/types'

import { UserNavigationGuest } from './user-navigation-guest'
import {
  UserNavigationLogged,
  UserNavigationLoggedProps
} from './user-navigation-logged'

export interface UserNavigationProps {
  user?: User | null
  loading?: boolean
  userNavigation?: UserNavigationLoggedProps['userNavigation']
}

export function UserNavigation({
  user,
  loading,
  userNavigation
}: UserNavigationProps) {
  const isAuth = !!user

  return (
    <>
      {loading && <></>}
      {!loading && (
        <>
          {isAuth && (
            <UserNavigationLogged user={user} userNavigation={userNavigation} />
          )}
          {!isAuth && <UserNavigationGuest />}
        </>
      )}
    </>
  )
}

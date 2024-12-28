import { User } from '@/shared/types'

import { UserNavigationGuest } from './user-navigation-guest'
import { UserNavigationLogged } from './user-navigation-logged'

export interface UserNavigationProps {
  user?: User | null
  loading?: boolean
}

export function UserNavigation({ user, loading }: UserNavigationProps) {
  const isAuth = !!user

  return (
    <>
      {loading && <></>}
      {!loading && (
        <>
          {isAuth && <UserNavigationLogged user={user} />}
          {!isAuth && <UserNavigationGuest />}
        </>
      )}
    </>
  )
}

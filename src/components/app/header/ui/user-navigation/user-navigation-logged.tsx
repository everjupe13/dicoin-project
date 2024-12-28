import clsx from 'clsx'

import { User } from '@/shared/types'

export interface UserNavigationLoggedProps {
  user: User
}

export function UserNavigationLogged({ user }: UserNavigationLoggedProps) {
  return (
    <div className="flex items-center gap-x-10">
      <div
        className={clsx(
          'flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-white bg-grey-900',
          !user?.photoURL && 'animate-pulse'
        )}
      >
        <img
          src={user?.photoURL || ''}
          alt=""
          className={clsx(
            'block w-full object-cover',
            !user?.photoURL && 'hidden'
          )}
        />
      </div>
      {user?.displayName && (
        <div className="font-medium text-white text-14">
          {user?.displayName}
        </div>
      )}
    </div>
  )
}

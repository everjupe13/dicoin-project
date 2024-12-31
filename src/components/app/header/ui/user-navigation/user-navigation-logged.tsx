import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/16/solid'
import clsx from 'clsx'

import { DropdownMenu } from '@/components/shared/dropdown-menu'
import { User } from '@/shared/types'

export interface UserNavigationLoggedProps {
  user: User
}

const userNavigation = [
  {
    label: 'Выйти',
    icon: <ArrowRightStartOnRectangleIcon />,
    onClick: () => console.log('Выйти')
  }
]

export function UserNavigationLogged({ user }: UserNavigationLoggedProps) {
  return (
    <DropdownMenu items={userNavigation} gap={2}>
      <div className="flex items-center gap-x-6">
        <div
          className={clsx(
            'flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-border bg-grey-900 p-2',
            !user?.photoURL && 'animate-pulse'
          )}
        >
          <img
            src={user?.photoURL || ''}
            alt=""
            width={26}
            height={26}
            className={clsx(
              'pointer-events-none block w-full rounded-full object-cover',
              !user?.photoURL && 'hidden'
            )}
          />
        </div>
        {user?.displayName && (
          <div className="font-medium text-white text-12">
            {user?.displayName}
          </div>
        )}
      </div>
    </DropdownMenu>
  )
}

import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/16/solid'
import clsx from 'clsx'

import { Logo } from '@/components/shared/logo'
import { useAuthStore } from '@/providers/auth-provider'

import { UserNavigation } from '../ui/user-navigation/user-navigation'

export interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  const { user, loading: userLoading, logout } = useAuthStore()

  const userNavigation = [
    {
      label: 'Выйти',
      icon: <ArrowRightStartOnRectangleIcon />,
      onClick: () => logout?.()
    }
  ]

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 h-50 border-b border-border bg-foreground shadow-md',
        className
      )}
    >
      <div className="h-full px-25 py-10">
        <div className="flex h-full items-center justify-between">
          <div className="w-[var(--aside-column-width)] flex-shrink-0">
            <Logo />
          </div>

          <div className="flex-shrink-0">
            <UserNavigation
              user={user}
              loading={userLoading}
              userNavigation={userNavigation}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

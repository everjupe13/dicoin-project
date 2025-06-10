// import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/16/solid'
import clsx from 'clsx'

// import { useAuthStore } from '@/components/modules/auth'
import { Logo } from '@/components/shared/logo'
// import { ROUTES } from '@/shared/const'

// import { UserNavigation } from '../ui/user-navigation/user-navigation'

export interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  // const { user, isLoading, logout } = useAuthStore()

  // const userNavigation = [
  //   {
  //     label: 'Профиль',
  //     link: ROUTES.PROFILE
  //   },
  //   {
  //     label: 'Выйти',
  //     icon: <ArrowRightStartOnRectangleIcon />
  //     // onClick: () => logout?.()
  //   }
  // ]

  return (
    <header
      className={clsx(
        'h-50 sticky top-0 z-50 border-b border-border bg-foreground shadow-md',
        className
      )}
    >
      <div className="px-25 h-full py-10">
        <div className="flex h-full items-center justify-between">
          <div className="w-[var(--aside-column-width)] flex-shrink-0">
            <Logo />
          </div>

          {/* <div className="flex-shrink-0">
            <UserNavigation
              user={user}
              loading={isLoading}
              userNavigation={userNavigation}
            />
          </div> */}
        </div>
      </div>
    </header>
  )
}

import { Logo } from '@/components/shared/logo'
import { useAuthStore } from '@/providers/auth-provider'

import { UserNavigation } from '../ui/user-navigation/user-navigation'

export function Header() {
  const { user, loading: userLoading } = useAuthStore()

  return (
    <header className="sticky left-0 right-0 top-0 h-50 bg-[#1D232C] shadow-md">
      <div className="container h-full py-10">
        <div className="flex h-full items-center justify-between">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <div className="flex-shrink-0">
            <UserNavigation user={user} loading={userLoading} />
          </div>
        </div>
      </div>
    </header>
  )
}

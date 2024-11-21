import { clsx } from 'clsx'
import { NavLink } from 'react-router-dom'

import { useAuthStore } from '@/providers/auth-provider'

export function Header() {
  const { user, loading } = useAuthStore()

  return (
    <header className="flex w-full justify-between rounded-12 bg-[#1D232C] px-25 py-20">
      {!loading && !user && (
        <div className="flex items-center gap-x-20">
          <NavLink
            to="/auth/signin"
            className="font-semibold leading-none text-white text-16"
          >
            Sign In
          </NavLink>
          <NavLink
            to="/auth/signup"
            className="font-semibold leading-none text-white text-16"
          >
            Sign Up
          </NavLink>
        </div>
      )}
      {!loading && user && (
        <div className="flex items-center gap-x-10">
          <div
            className={clsx(
              'flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-grey-900',
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
            <div className="font-bold text-white text-16">
              {user?.displayName}
            </div>
          )}
        </div>
      )}
    </header>
  )
}

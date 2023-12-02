import { clsx } from 'clsx'
import { FC, ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

import { useAuthStore } from '@/components/features/auth-container'

type Props = {
  children?: string | ReactElement | JSX.Element | JSX.Element[]
}

const Header: FC<Props> = () => {
  const userData = useAuthStore(state => state.userData)
  const imageUrl = userData?.photoURL || ''
  const displayedName = userData?.displayName

  return (
    <header className="flex w-full justify-between rounded-12 bg-[#1D232C] px-25 py-20">
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
      <div className="flex items-center gap-x-10">
        <div
          className={clsx(
            'flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-lightgray',
            !imageUrl && 'animate-pulse'
          )}
        >
          <img
            src={imageUrl}
            alt=""
            className={clsx('block w-full object-cover', !imageUrl && 'hidden')}
          />
        </div>
        {displayedName && (
          <div className="font-bold text-white text-16">{displayedName}</div>
        )}
      </div>
    </header>
  )
}

export default Header

import { NavLink } from 'react-router-dom'

import { textSignIn, textSignUp } from '@/shared/const'
import { utilLocaleString } from '@/shared/utils/locale-string'

export interface UserNavigationGuestProps {}

export function UserNavigationGuest() {
  return (
    <div>
      <div className="flex items-center gap-x-20">
        <NavLink
          to="/auth/signin"
          className="font-semibold leading-none text-white text-16"
        >
          {utilLocaleString(textSignIn, 'ru')}
        </NavLink>
        <NavLink
          to="/auth/signup"
          className="font-semibold leading-none text-white text-16"
        >
          {utilLocaleString(textSignUp, 'ru')}
        </NavLink>
      </div>
    </div>
  )
}

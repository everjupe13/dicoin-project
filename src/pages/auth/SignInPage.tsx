import { FC } from 'react'

import { AuthFormSignIn } from '@/components/modules/auth/lib/AuthFormSignin'
import { AuthFormWrapper } from '@/components/modules/auth/lib/AuthFormWrapper'
import { textSignIn } from '@/shared/const'
import { utilLocaleString } from '@/shared/utils/locale-string'

export const SignInPage: FC = () => {
  return (
    <>
      <AuthFormWrapper title={utilLocaleString(textSignIn)}>
        <AuthFormSignIn />
      </AuthFormWrapper>
    </>
  )
}

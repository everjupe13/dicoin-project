import { FC } from 'react'

import { AuthFormSignIn, AuthFormWrapper } from '@/components/modules/auth'
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

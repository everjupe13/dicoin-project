import { FC } from 'react'

import { AuthFormSingUp } from '@/components/modules/auth/lib/AuthFormSignup'
import { AuthFormWrapper } from '@/components/modules/auth/lib/AuthFormWrapper'
import { textSignUp } from '@/shared/const'
import { utilLocaleString } from '@/shared/utils/locale-string'

export const SignUpPage: FC = () => {
  return (
    <>
      <AuthFormWrapper title={utilLocaleString(textSignUp)}>
        <AuthFormSingUp />
      </AuthFormWrapper>
    </>
  )
}

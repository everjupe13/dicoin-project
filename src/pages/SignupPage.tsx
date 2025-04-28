import { FC } from 'react'

import { AuthFormSingUp } from '@/components/modules/auth/lib/AuthFormSignup'
import { AuthFormWrapper } from '@/components/modules/auth/lib/AuthFormWrapper'
import { textSignUp } from '@/shared/const'

export const SignupPage: FC = () => {
  return (
    <>
      <AuthFormWrapper title={textSignUp}>
        <AuthFormSingUp />
      </AuthFormWrapper>
    </>
  )
}

import { FC } from 'react'

import { AuthFormSignUp, AuthFormWrapper } from '@/components/modules/auth'
import { textSignUp } from '@/shared/const'
import { utilLocaleString } from '@/shared/utils/locale-string'

export const SignUpPage: FC = () => {
  return (
    <>
      <AuthFormWrapper title={utilLocaleString(textSignUp)}>
        <AuthFormSignUp />
      </AuthFormWrapper>
    </>
  )
}

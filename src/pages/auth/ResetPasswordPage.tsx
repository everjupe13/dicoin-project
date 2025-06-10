import { FC } from 'react'

import {
  AuthFormResetPassword,
  AuthFormWrapper
} from '@/components/modules/auth'
import { textResetPassword } from '@/shared/const'
import { utilLocaleString } from '@/shared/utils/locale-string'

export const ResetPasswordPage: FC = () => {
  return (
    <>
      <AuthFormWrapper title={utilLocaleString(textResetPassword)}>
        <AuthFormResetPassword />
      </AuthFormWrapper>
    </>
  )
}

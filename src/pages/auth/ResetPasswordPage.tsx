import {
  AuthFormResetPassword,
  AuthFormWrapper
} from '@/components/modules/auth'
import { textResetPassword } from '@/shared/const'
import { utilLocaleString } from '@/shared/utils/locale-string'

export function ResetPasswordPage() {
  return (
    <>
      <AuthFormWrapper title={utilLocaleString(textResetPassword)}>
        <AuthFormResetPassword />
      </AuthFormWrapper>
    </>
  )
}

import { AuthFormSignUp, AuthFormWrapper } from '@/components/modules/auth'
import { textSignUp } from '@/shared/const'
import { utilLocaleString } from '@/shared/utils/locale-string'

export function SignUpPage() {
  return (
    <>
      <AuthFormWrapper title={utilLocaleString(textSignUp)}>
        <AuthFormSignUp />
      </AuthFormWrapper>
    </>
  )
}

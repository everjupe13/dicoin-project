import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/shared/button'
import { useAuthStore } from '@/providers/auth-provider'

export const SigninPage: FC = () => {
  const { authByExternalPopup } = useAuthStore()

  return (
    <>
      <p>signin</p>
      <Button
        variant="secondary"
        size="normal"
        className="mb-10"
        onClick={authByExternalPopup}
      >
        Google
      </Button>
      <Link to="/protected" className="underline">
        to protected
      </Link>
    </>
  )
}

import { FC } from 'react'
import { Link } from 'react-router-dom'

import { useAuthContext } from '@/components/features/auth-container'
import { Button } from '@/components/shared/button'

export const SigninPage: FC = () => {
  const { openGoogleAuthPopup } = useAuthContext()
  return (
    <>
      <p>signin</p>
      <Button
        variant="secondary"
        size="normal"
        className="mb-10"
        onClick={openGoogleAuthPopup}
      >
        Google
      </Button>
      <Link to="/protected" className="underline">
        to protected
      </Link>
    </>
  )
}

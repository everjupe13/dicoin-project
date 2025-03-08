import { FC } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

import { Button } from '@/components/shared/button'
import { useAuthStore } from '@/providers/auth-provider'
import { ROUTES, SEARCH_PARAMS } from '@/shared/const'

export const SigninPage: FC = () => {
  const { authByExternalPopup } = useAuthStore()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const handleAuth = async () => {
    const user = await authByExternalPopup?.()

    if (user) {
      const redirectUrl = searchParams.get(SEARCH_PARAMS.REDIRECT)
      const navigateUrl = redirectUrl || ROUTES.HOME

      navigate(navigateUrl)
    }
  }

  return (
    <>
      <p>signin</p>
      <Button
        variant="secondary"
        size="normal"
        className="mb-10"
        onClick={handleAuth}
      >
        Google
      </Button>
      <Link to="/protected" className="underline">
        to protected
      </Link>
    </>
  )
}

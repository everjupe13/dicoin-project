import { FC } from 'react'
import { Link } from 'react-router-dom'

import { useAuthContext } from '@/components/features/auth-container'
import { Button } from '@/components/shared/button'
import { IconedButton } from '@/components/shared/icon-button'

export const HomePage: FC = () => {
  const { openGoogleAuthPopup } = useAuthContext()

  return (
    <>
      <div className="mb-20">
        <Link to="/protected" className="underline">
          to protected
        </Link>
      </div>
      <p>hello</p>
      <Button
        variant="info"
        size="normal"
        className="mb-10"
        onClick={openGoogleAuthPopup}
      >
        Google
      </Button>
      <Button variant="danger" size="small" className="mb-10">
        click
      </Button>
      <Button variant="primary" size="normal" className="mb-10">
        click
      </Button>
      <IconedButton variant="primary" size="normal" className="mb-10">
        +
      </IconedButton>
      <IconedButton variant="dark" size="small" className="mb-10">
        +
      </IconedButton>
    </>
  )
}

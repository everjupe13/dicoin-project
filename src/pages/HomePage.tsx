import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/shared/button'
import { IconedButton } from '@/components/shared/icon-button'

export const HomePage: FC = () => {
  return (
    <>
      <div className="mb-20">
        <Link to="/protected" className="underline">
          to protected
        </Link>
      </div>
      <p>hello</p>

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

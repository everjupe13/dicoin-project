import { FC } from 'react'

import { Button } from '@/components/shared/button'
import { IconedButton } from '@/components/shared/icon-button'

export const HomePage: FC = () => {
  return (
    <>
      <p>hello</p>
      <Button variant="info" size="normal" className="mb-10">
        click
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

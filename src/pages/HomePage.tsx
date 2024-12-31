import {
  ArchiveBoxXMarkIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon
} from '@heroicons/react/16/solid'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/shared/button'
import { CheckBox } from '@/components/shared/checkbox'
// import { Radio } from '@/components/shared/radio'
import { DropdownMenu } from '@/components/shared/dropdown-menu'
import { IconedButton } from '@/components/shared/icon-button'

const data = [
  {
    label: 'Edit',
    icon: <PencilIcon />
  },
  {
    label: 'Duplicate',
    icon: <Square2StackIcon />
  },
  {
    label: 'Archive',
    icon: <ArchiveBoxXMarkIcon />
  },
  {
    label: 'Delete',
    icon: <TrashIcon />
  }
]

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
      <CheckBox>Label</CheckBox>

      <div className="my-20">
        <DropdownMenu items={data} label="Options" />
      </div>
      {/* <Radio></Radio> */}
    </>
  )
}

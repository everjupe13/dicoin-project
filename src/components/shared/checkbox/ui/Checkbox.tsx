import { clsx } from 'clsx'
import { FC, InputHTMLAttributes, useState } from 'react'

import { CheckIcon } from '@/components/shared/icons/CheckIcon'

type Props = InputHTMLAttributes<HTMLInputElement> & { disabled?: boolean }

const CheckBox: FC<Props> = ({ children, className, disabled }) => {
  const [value, setValue] = useState(false)
  const handleInputChange = () => {
    setValue(prevValue => !prevValue)
  }
  return (
    <>
      <label className={clsx('flex items-center gap-9', className)}>
        <input
          onChange={handleInputChange}
          type="checkbox"
          checked={value}
          disabled={disabled}
          className="peer hidden"
        />
        <span
          className={clsx(
            'border-grey-600 flex h-18 w-18 items-center justify-center rounded-[2px] border bg-transparent transition-all',
            'peer-disabled:opacity-50',
            'peer-checked:border-blue-600 peer-checked:bg-blue-600',
            'peer-checked:peer-disabled:border-grey-600 peer-checked:peer-disabled:bg-grey-600'
          )}
        >
          <CheckIcon />
        </span>
        <span>{children}</span>
      </label>
    </>
  )
}

export default CheckBox

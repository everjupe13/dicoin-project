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
          // onClick={changeClass}
          onChange={handleInputChange}
          type="checkbox"
          checked={value}
          disabled={disabled}
          className="peer hidden"
        />
        <span
          className={clsx(
            'flex h-18 w-18 items-center justify-center rounded-[2px] border border-[#7D8FA9] bg-transparent transition-all',
            'peer-disabled:opacity-50',
            'peer-checked:border-[#319DFF] peer-checked:bg-[#319DFF]',
            'peer-checked:peer-disabled:border-[#7D8FA9] peer-checked:peer-disabled:bg-[#7D8FA9]'
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

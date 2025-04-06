import { MenuItem } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/16/solid'
import clsx from 'clsx'

import { SelectOption } from '../types'

export interface SelectItemProps {
  label: SelectOption['label']
  value: SelectOption['value']

  selected?: boolean
  disabled?: boolean
  className?: string

  onChange?: (value: SelectOption['value']) => void
}

export function SelectItem({
  label,
  value,
  selected = false,
  disabled = false,
  className,

  onChange
}: SelectItemProps) {
  return (
    <MenuItem disabled={disabled}>
      <button
        className={clsx(
          'group flex h-34 w-full items-center gap-7 rounded-6 px-8',
          selected ? 'bg-white/15' : 'data-[focus]:bg-white/10',
          disabled && '',
          className
        )}
        disabled={disabled}
        onClick={() => onChange?.(value)}
      >
        <span className="block flex-grow text-left">{label}</span>
        {selected && (
          <span className="flex-basis-[16px] flex-shrink-0 flex-grow-0">
            <CheckIcon className="h-16 w-16" />
          </span>
        )}
      </button>
    </MenuItem>
  )
}

import { MenuItem } from '@headlessui/react'
import clsx from 'clsx'
import { ReactNode } from 'react'

export interface SelectContentEmptyProps {
  emptyContent: ReactNode | string
  className?: string
}

export function SelectContentEmpty({
  emptyContent,
  className
}: SelectContentEmptyProps) {
  return (
    <MenuItem disabled={true}>
      <div
        className={clsx(
          'group pointer-events-none flex h-34 w-full select-none items-center justify-center px-8 opacity-60',
          className
        )}
      >
        {emptyContent}
      </div>
    </MenuItem>
  )
}

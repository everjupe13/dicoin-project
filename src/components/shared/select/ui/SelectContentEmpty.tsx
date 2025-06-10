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
          'h-34 group pointer-events-none flex w-full select-none items-center justify-center px-8 opacity-60',
          className
        )}
      >
        {emptyContent}
      </div>
    </MenuItem>
  )
}

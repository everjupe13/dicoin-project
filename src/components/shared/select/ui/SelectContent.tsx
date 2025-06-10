import { MenuItems, type MenuItemsProps } from '@headlessui/react'
import clsx from 'clsx'
import { type ReactNode } from 'react'

import { SelectContentEmpty } from './SelectContentEmpty'

export interface SelectContentProps {
  className?: string
  anchor?: MenuItemsProps['anchor']
  children?: ReactNode

  showEmpty?: boolean
  isEmpty?: boolean

  emptyContentLabel?: string
}

export function SelectContent({
  className,
  anchor = 'bottom start',
  children,
  showEmpty,
  emptyContentLabel,
  isEmpty
}: SelectContentProps) {
  return (
    <MenuItems
      transition
      anchor={anchor}
      className={clsx(
        'z-[100]',
        'flex flex-col items-stretch gap-y-4',
        'rounded-6 min-w-[210px] border border-white/5 p-6',
        'bg-background-modals shadow-modals',
        'font-medium text-white text-14',
        'origin-top transition duration-100 ease-out',
        'focus:outline-none',
        '[--anchor-gap:5px] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0',
        className
      )}
    >
      {isEmpty && showEmpty ? (
        <SelectContentEmpty emptyContent={emptyContentLabel} />
      ) : (
        children
      )}
    </MenuItems>
  )
}

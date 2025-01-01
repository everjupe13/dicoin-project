import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { clsx } from 'clsx'
import { AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/shared/const'

import { DropdownMenuItemProps } from '../types'
import { MotionItemsWrapper } from './motion-items-wrapper'

export interface DropdownMenuProps {
  label?: string
  children?: ReactNode
  items: DropdownMenuItemProps[]

  /**
   * Gap between the label component and dropdowm modal
   */
  gap?: number
}

export function DropdownMenu({
  label,
  children,
  items,
  gap = 5
}: DropdownMenuProps) {
  const navigate = useNavigate()
  const handleItemNavigate = (item: DropdownMenuItemProps) => {
    item.onClick?.()
    navigate(item.link || ROUTES.HOME)
  }

  return (
    <Menu>
      {({ open }) => (
        <>
          <MenuButton
            className={clsx(
              'flex items-center gap-10 rounded-6 px-12 py-6',
              'bg-background-modals data-[hover]:bg-background-modals-hover data-[open]:bg-background-modals-active',
              'font-medium text-white text-14',
              'focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white'
            )}
          >
            {children ? (
              <>{children}</>
            ) : (
              <>
                {label}
                <ChevronDownIcon className="h-16 w-16 fill-white/60" />
              </>
            )}
          </MenuButton>

          <AnimatePresence>
            {open && (
              <MenuItems
                static
                as={MotionItemsWrapper}
                initial={{ opacity: 0, scale: 0.9, y: -5 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -5 }}
                anchor={{
                  to: 'bottom end',
                  gap: gap
                }}
                className={clsx(
                  'z-[100]',
                  'flex flex-col items-stretch gap-y-4',
                  'w-[210px] rounded-6 border border-white/5 p-6',
                  'bg-background-modals shadow-modals',
                  'font-medium text-white text-14',
                  'origin-top-right',
                  'focus:outline-none'
                )}
              >
                {items.map((item, itemIdx) => (
                  <MenuItem key={itemIdx}>
                    <button
                      className={clsx(
                        'group flex h-34 w-full items-center gap-10 rounded-6 px-8 data-[focus]:bg-white/10',
                        '[&>svg]:h-16 [&>svg]:w-16 [&>svg]:fill-white/30'
                      )}
                      onClick={
                        item.link
                          ? () => handleItemNavigate(item)
                          : () => item.onClick?.()
                      }
                    >
                      {item.icon}
                      {item.label}
                    </button>
                  </MenuItem>
                ))}
              </MenuItems>
            )}
          </AnimatePresence>
        </>
      )}
    </Menu>
  )
}

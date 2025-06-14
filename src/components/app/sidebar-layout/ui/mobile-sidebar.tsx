import {
  CloseButton,
  Dialog,
  DialogBackdrop,
  DialogPanel
} from '@headlessui/react'
import { ReactNode } from 'react'

import { NavbarItem } from '@/components/app/navbar'

import { CloseMenuIcon } from './close-menu-icon'

export interface MobileSidebarProps {
  open: boolean
  close: () => void
  children?: ReactNode
}

export function MobileSidebar({ open, close, children }: MobileSidebarProps) {
  return (
    <Dialog open={open} onClose={close} className="lg:hidden">
      <DialogBackdrop
        transition
        className="data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in fixed inset-0 bg-black/30 transition"
      />
      <DialogPanel
        transition
        className="data-closed:-translate-x-full fixed inset-y-0 w-full max-w-80 p-2 transition duration-300 ease-in-out"
      >
        <div className="rounded-lg shadow-xs flex h-full flex-col bg-white ring-1 ring-zinc-950/5 dark:bg-zinc-900 dark:ring-white/10">
          <div className="-mb-3 px-4 pt-3">
            <CloseButton as={NavbarItem} aria-label="Close navigation">
              <CloseMenuIcon />
            </CloseButton>
          </div>
          {children}
        </div>
      </DialogPanel>
    </Dialog>
  )
}

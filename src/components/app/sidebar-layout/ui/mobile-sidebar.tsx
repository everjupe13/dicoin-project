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
    <Dialog open={open} onClose={close} className="hidden md:block">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/30 transition data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <DialogPanel
        transition
        className="fixed inset-y-0 w-full max-w-[320px] p-8 transition duration-300 ease-in-out data-[closed]:-translate-x-full"
      >
        <div className="rounded-8 flex h-full flex-col bg-white shadow-sm ring-1 ring-zinc-950/5 dark:bg-zinc-900 dark:ring-white/10">
          <div className="-mb-12 px-16 pt-12">
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

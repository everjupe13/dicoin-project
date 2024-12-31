import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon
} from '@heroicons/react/16/solid'
import { clsx } from 'clsx'

export interface DropdownMenuProps {}

const data = [
  {
    label: 'Edit',
    icon: () => <PencilIcon className="h-16 w-16 fill-white/30" />
  },
  {
    label: 'Duplicate',
    icon: () => <Square2StackIcon className="h-16 w-16 fill-white/30" />
  },
  {
    label: 'Archive',
    icon: () => <ArchiveBoxXMarkIcon className="h-16 w-16 fill-white/30" />
  },
  {
    label: 'Delete',
    icon: () => <TrashIcon className="h-16 w-16 fill-white/30" />
  }
]

// 0 0 2px 0 rgba(0, 0, 0, .30) 0 4px 16px 0 rgba(0, o, 0, .30)
export function DropdownMenu() {
  return (
    <Menu>
      <MenuButton
        className={clsx(
          'data-[hover]:bg-gray-700 data-[open]:bg-gray-700 inline-flex items-center gap-2 rounded-6 bg-background-modals px-12 py-6 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white'
        )}
      >
        Options
        <ChevronDownIcon className="h-16 w-16 fill-white/60" />
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className={clsx(
          'flex flex-col items-stretch gap-y-4',
          'w-[210px] rounded-6 border border-white/5 p-6',
          'bg-white/5 font-medium text-white text-14',
          'origin-top-right transition duration-100 ease-out',
          '[--anchor-gap:5px] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0'
        )}
      >
        {data.map(item => (
          <MenuItem key={item.label}>
            <button className="group flex h-34 w-full items-center gap-10 rounded-6 px-8 data-[focus]:bg-white/10">
              {item.icon()}
              {item.label}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  )
}

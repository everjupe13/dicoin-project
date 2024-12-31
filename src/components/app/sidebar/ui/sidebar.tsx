import clsx from 'clsx'

import { SidebarNavList } from './sidebar-nav-list'

export interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div
      className={clsx(
        'flex flex-col border-r border-border shadow-modals',
        className
      )}
    >
      <aside className="flex-grow px-15 py-20">
        <SidebarNavList />
      </aside>
    </div>
  )
}

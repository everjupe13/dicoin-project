import clsx from 'clsx'

import { SidebarNavList } from './sidebar-nav-list'

export interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={clsx('flex flex-col', className)}>
      <aside className="flex-grow p-10">
        <SidebarNavList />
      </aside>
    </div>
  )
}

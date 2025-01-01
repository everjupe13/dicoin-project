import clsx from 'clsx'

import { ROUTES } from '@/shared/const'

import { SidebarNavList } from './sidebar-nav-list'

export interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const sidebarItems = [
    {
      label: 'Дашборд',
      link: ROUTES.HOME
    },
    {
      label: 'О нас',
      link: ROUTES.ABOUT
    },
    {
      label: 'Расходы',
      link: ROUTES.SPENDINGS
    }
  ]

  return (
    <div
      className={clsx(
        'flex flex-col border-r border-border shadow-modals',
        className
      )}
    >
      <aside className="flex-grow px-15 py-20">
        <SidebarNavList sidebarItems={sidebarItems} />
      </aside>
    </div>
  )
}

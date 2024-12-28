import clsx from 'clsx'
import { useLocation } from 'react-router-dom'

import { SidebarNavListItem } from './sidebar-nav-list-item'

export interface SidebarNavListProps {
  className?: string
}

export function SidebarNavList({ className }: SidebarNavListProps) {
  const location = useLocation()
  const isActiveRoute = (routePath?: string) =>
    routePath !== undefined && location.pathname === routePath

  return (
    <nav className={clsx('', className)}>
      <ul className="flex flex-col gap-y-4">
        <SidebarNavListItem href="/" active={isActiveRoute('/')}>
          Dashboard
        </SidebarNavListItem>
        <SidebarNavListItem href="/about" active={isActiveRoute('/about')}>
          History
        </SidebarNavListItem>
        <SidebarNavListItem
          href="/analytics"
          active={isActiveRoute('/analytics')}
        >
          Analytics
        </SidebarNavListItem>
        <SidebarNavListItem
          href="/spendings"
          active={isActiveRoute('/spendings')}
        >
          Spendings
        </SidebarNavListItem>
      </ul>
    </nav>
  )
}

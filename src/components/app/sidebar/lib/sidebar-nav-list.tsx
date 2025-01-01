import clsx from 'clsx'
import { useLocation } from 'react-router-dom'

import { SidebarItem } from '../types'
import { SidebarNavListItem } from './sidebar-nav-list-item'

export interface SidebarNavListProps {
  className?: string
  sidebarItems?: SidebarItem[]
}

export function SidebarNavList({
  className,
  sidebarItems = []
}: SidebarNavListProps) {
  const location = useLocation()
  const isActiveRoute = (routePath?: string) =>
    routePath !== undefined && location.pathname === routePath

  return (
    <nav className={clsx('', className)}>
      <ul className="flex flex-col gap-y-4">
        {sidebarItems.map((item, itemIdx) => (
          <SidebarNavListItem
            key={itemIdx}
            href={item.link}
            active={isActiveRoute(item.link)}
            onClick={item?.onClick}
          >
            {item.label}
          </SidebarNavListItem>
        ))}
      </ul>
    </nav>
  )
}

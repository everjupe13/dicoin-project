import clsx from 'clsx'
import { FC } from 'react'

import SidebarNavListItem from './SidebarNavListItem'

type Props = {
  className?: string
}

const SidebarNavList: FC<Props> = ({ className }) => {
  return (
    <nav className={clsx('', className)}>
      <ul className="flex flex-col gap-y-7">
        <SidebarNavListItem href="/">Dashboard</SidebarNavListItem>
        <SidebarNavListItem href="/about">History</SidebarNavListItem>
        <SidebarNavListItem href="/analytics">Analytics</SidebarNavListItem>
      </ul>
    </nav>
  )
}

export default SidebarNavList

import clsx from 'clsx'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export interface SidebarNavListItemProps {
  className?: string
  children?: ReactNode
  href?: string
  active?: boolean
}

export function SidebarNavListItem({
  className,
  children,
  href,
  active
}: SidebarNavListItemProps) {
  const Component = href
    ? Link
    : ({ children, className }: SidebarNavListItemProps) => (
        <div className={className}>{children}</div>
      )

  return (
    <li
      className={clsx(
        'flex h-32 flex-col',
        'rounded-8 font-medium text-white text-14',
        active && 'bg-[#27272a]',
        'transition duration-200 hover:bg-[#27272a] hover:opacity-90',
        className
      )}
    >
      <Component to={href || ''} className="flex flex-grow items-center px-10">
        {children}
      </Component>
    </li>
  )
}

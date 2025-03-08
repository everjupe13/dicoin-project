import clsx from 'clsx'
import { ComponentPropsWithoutRef } from 'react'

export interface SidebarProps extends ComponentPropsWithoutRef<'nav'> {}

export function Sidebar({ className, ...props }: SidebarProps) {
  return (
    <nav
      {...props}
      className={clsx(className, 'flex h-full min-h-0 flex-col')}
    />
  )
}

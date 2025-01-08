import { clsx } from 'clsx'
import { ComponentPropsWithoutRef } from 'react'

export interface SidebarLabelProps extends ComponentPropsWithoutRef<'span'> {}

export function SidebarLabel({ className, ...props }: SidebarLabelProps) {
  return <span {...props} className={clsx(className, 'truncate')} />
}

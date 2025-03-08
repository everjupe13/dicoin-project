import { clsx } from 'clsx'
import { ComponentPropsWithoutRef } from 'react'

export interface SidebarSpacerProps extends ComponentPropsWithoutRef<'div'> {}

export function SidebarSpacer({ className, ...props }: SidebarSpacerProps) {
  return (
    <div
      aria-hidden="true"
      {...props}
      className={clsx(className, 'mt-32 flex-1')}
    />
  )
}

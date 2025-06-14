import { clsx } from 'clsx'
import { ComponentPropsWithoutRef } from 'react'

export interface SidebarBodyProps extends ComponentPropsWithoutRef<'div'> {}

export function SidebarBody({ className, ...props }: SidebarBodyProps) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'flex flex-1 flex-col overflow-y-auto p-4 [&>[data-slot=section]+[data-slot=section]]:mt-8'
      )}
    />
  )
}

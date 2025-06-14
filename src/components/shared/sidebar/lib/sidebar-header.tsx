import { clsx } from 'clsx'
import { ComponentPropsWithoutRef } from 'react'

export interface SidebarHeaderProps extends ComponentPropsWithoutRef<'div'> {}

export function SidebarHeader({ className, ...props }: SidebarHeaderProps) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'flex flex-col border-b border-zinc-950/5 p-4 dark:border-white/5 [&>[data-slot=section]+[data-slot=section]]:mt-2.5'
      )}
    />
  )
}

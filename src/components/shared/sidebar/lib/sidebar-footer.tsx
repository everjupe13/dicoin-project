import { clsx } from 'clsx'
import { ComponentPropsWithoutRef } from 'react'

export interface SidebarFooterProps extends ComponentPropsWithoutRef<'div'> {}

export function SidebarFooter({ className, ...props }: SidebarFooterProps) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'flex flex-col border-t border-zinc-950/5 p-16 dark:border-white/5 [&>[data-slot=section]+[data-slot=section]]:mt-10'
      )}
    />
  )
}

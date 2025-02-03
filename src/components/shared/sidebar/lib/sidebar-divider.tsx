import { clsx } from 'clsx'
import { ComponentPropsWithoutRef } from 'react'

export interface SidebarDividerProps extends ComponentPropsWithoutRef<'hr'> {}

export function SidebarDivider({ className, ...props }: SidebarDividerProps) {
  return (
    <hr
      {...props}
      className={clsx(
        className,
        '-mx-16 border-t border-zinc-950/5 md:my-16 dark:border-white/5'
      )}
    />
  )
}

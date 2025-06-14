import { clsx } from 'clsx'
import { ComponentPropsWithoutRef } from 'react'

export interface SidebarDividerProps extends ComponentPropsWithoutRef<'hr'> {}

export function SidebarDivider({ className, ...props }: SidebarDividerProps) {
  return (
    <hr
      {...props}
      className={clsx(
        className,
        'my-4 border-t border-zinc-950/5 lg:-mx-4 dark:border-white/5'
      )}
    />
  )
}

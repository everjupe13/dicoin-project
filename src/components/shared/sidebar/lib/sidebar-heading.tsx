import { clsx } from 'clsx'
import { ComponentPropsWithoutRef } from 'react'

export interface SidebarHeadingProps extends ComponentPropsWithoutRef<'h3'> {}

export function SidebarHeading({ className, ...props }: SidebarHeadingProps) {
  return (
    <h3
      {...props}
      className={clsx(
        className,
        'mb-4 px-8 text-xs/6 font-medium text-zinc-500 dark:text-zinc-400'
      )}
    />
  )
}

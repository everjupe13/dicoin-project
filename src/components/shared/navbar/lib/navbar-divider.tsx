import { clsx } from 'clsx'
import { ComponentPropsWithoutRef } from 'react'

export interface NavbarDividerProps extends ComponentPropsWithoutRef<'div'> {}

export function NavbarDivider({ className, ...props }: NavbarDividerProps) {
  return (
    <div
      aria-hidden="true"
      {...props}
      className={clsx(className, 'h-24 w-1 bg-zinc-950/10 dark:bg-white/10')}
    />
  )
}

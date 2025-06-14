import { clsx } from 'clsx'
import { ComponentPropsWithoutRef } from 'react'

export interface NavbarProps extends ComponentPropsWithoutRef<'nav'> {}

export function Navbar({ className, ...props }: NavbarProps) {
  return (
    <nav
      {...props}
      className={clsx(className, 'flex flex-1 items-center gap-4 py-2.5')}
    />
  )
}

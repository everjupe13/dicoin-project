import { clsx } from 'clsx'
import { ComponentPropsWithoutRef } from 'react'

export interface NavbarLabel extends ComponentPropsWithoutRef<'span'> {}

export function NavbarLabel({ className, ...props }: NavbarLabel) {
  return <span {...props} className={clsx(className, 'truncate')} />
}

import { clsx } from 'clsx'
import { ComponentPropsWithoutRef } from 'react'

export interface NavbarSpacerProps extends ComponentPropsWithoutRef<'div'> {}

export function NavbarSpacer({ className, ...props }: NavbarSpacerProps) {
  return (
    <div
      aria-hidden="true"
      {...props}
      className={clsx(className, '-ml-16 flex-1')}
    />
  )
}

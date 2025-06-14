import { clsx } from 'clsx'
import { LayoutGroup } from 'framer-motion'
import { ComponentPropsWithoutRef, useId } from 'react'

export interface NavbarSectionProps extends ComponentPropsWithoutRef<'div'> {}

export function NavbarSection({ className, ...props }: NavbarSectionProps) {
  const id = useId()

  return (
    <LayoutGroup id={id}>
      <div {...props} className={clsx(className, 'flex items-center gap-3')} />
    </LayoutGroup>
  )
}

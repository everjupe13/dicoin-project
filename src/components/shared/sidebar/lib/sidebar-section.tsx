import { clsx } from 'clsx'
import { LayoutGroup } from 'framer-motion'
import { ComponentPropsWithoutRef, useId } from 'react'

export interface SidebarSectionProps extends ComponentPropsWithoutRef<'div'> {}

export function SidebarSection({ className, ...props }: SidebarSectionProps) {
  const id = useId()

  return (
    <LayoutGroup id={id}>
      <div
        {...props}
        data-slot="section"
        className={clsx(className, 'flex flex-col gap-0.5')}
      />
    </LayoutGroup>
  )
}

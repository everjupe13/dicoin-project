import clsx from 'clsx'
import { type ComponentPropsWithoutRef } from 'react'

export type CheckboxGroupProps = ComponentPropsWithoutRef<'div'>

export function CheckboxGroup({ className, ...props }: CheckboxGroupProps) {
  return (
    <div
      data-slot="control"
      {...props}
      className={clsx(
        className,
        // Basic groups
        'space-y-3',
        // With descriptions
        'has-data-[slot=description]:space-y-6 has-data-[slot=description]:**:data-[slot=label]:font-medium'
      )}
    />
  )
}

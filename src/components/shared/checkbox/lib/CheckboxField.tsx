import {
  Field as HeadlessField,
  type FieldProps as HeadlessFieldProps
} from '@headlessui/react'
import clsx from 'clsx'

export interface CheckboxFieldProps
  extends Omit<HeadlessFieldProps, 'as' | 'className'> {
  className?: string
}

export function CheckboxField({ className, ...props }: CheckboxFieldProps) {
  return (
    <HeadlessField
      data-slot="field"
      {...props}
      className={clsx(
        className,
        // Base layout
        'grid grid-cols-[1.125rem_1fr] gap-x-4 gap-y-1 sm:grid-cols-[1rem_1fr]',
        // Control layout
        '*:data-[slot=control]:mt-0.75 *:data-[slot=control]:col-start-1 *:data-[slot=control]:row-start-1 sm:*:data-[slot=control]:mt-1',
        // Label layout
        '*:data-[slot=label]:col-start-2 *:data-[slot=label]:row-start-1',
        // Description layout
        '*:data-[slot=description]:col-start-2 *:data-[slot=description]:row-start-2',
        // With description
        'has-data-[slot=description]:**:data-[slot=label]:font-medium'
      )}
    />
  )
}

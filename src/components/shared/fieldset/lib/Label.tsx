import {
  Label as HeadlessLabel,
  type LabelProps as HeadlessLabelProps
} from '@headlessui/react'
import clsx from 'clsx'

export type LabelProps = {
  className?: string
} & Omit<HeadlessLabelProps, 'as' | 'className'>

export function Label({ className, ...props }: LabelProps) {
  return (
    <HeadlessLabel
      data-slot="label"
      {...props}
      className={clsx(
        className,
        'data-disabled:opacity-50 select-none text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white'
      )}
    />
  )
}

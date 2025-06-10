import {
  Description as HeadlessDescription,
  type DescriptionProps as HeadlessDescriptionProps
} from '@headlessui/react'
import clsx from 'clsx'

export type DescriptionProps = {
  className?: string
} & Omit<HeadlessDescriptionProps, 'as' | 'className'>

export function Description({ className, ...props }: DescriptionProps) {
  return (
    <HeadlessDescription
      data-slot="description"
      {...props}
      className={clsx(
        className,
        'data-disabled:opacity-50 text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400'
      )}
    />
  )
}

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
        'data-disabled:opacity-50 text-text-base text-16 sm:text-14'
      )}
    />
  )
}

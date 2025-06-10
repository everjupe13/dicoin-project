import {
  Description as HeadlessDescription,
  type DescriptionProps as HeadlessDescriptionProps
} from '@headlessui/react'
import clsx from 'clsx'

export type ErrorMessageProps = {
  className?: string
} & Omit<HeadlessDescriptionProps, 'as' | 'className'>

export function ErrorMessage({ className, ...props }: ErrorMessageProps) {
  return (
    <HeadlessDescription
      data-slot="error"
      {...props}
      className={clsx(
        className,
        'data-disabled:opacity-50 text-base/6 text-red-600 sm:text-sm/6 dark:text-red-500'
      )}
    />
  )
}

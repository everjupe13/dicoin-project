import {
  Fieldset as HeadlessFieldset,
  type FieldsetProps as HeadlessFieldsetProps
} from '@headlessui/react'
import clsx from 'clsx'

export type FieldsetProps = {
  className?: string
} & Omit<HeadlessFieldsetProps, 'as' | 'className'>

export function Fieldset({
  className,
  ...props
}: { className?: string } & Omit<HeadlessFieldsetProps, 'as' | 'className'>) {
  return (
    <HeadlessFieldset
      {...props}
      className={clsx(
        className,
        '*:data-[slot=text]:mt-4 [&>*+[data-slot=control]]:mt-24'
      )}
    />
  )
}

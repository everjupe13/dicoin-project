import clsx from 'clsx'
import { type ComponentPropsWithoutRef } from 'react'

export type FieldGroupProps = ComponentPropsWithoutRef<'div'>

export function FieldGroup({
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      data-slot="control"
      {...props}
      className={clsx(className, 'space-y-32')}
    />
  )
}

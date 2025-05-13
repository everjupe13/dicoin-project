import clsx from 'clsx'
import { type ReactNode } from 'react'

import { Field, Label } from '@/components/shared/fieldset'

export interface FormFieldProps {
  label?: string
  children?: ReactNode
}

export function FormField({ children, label }: FormFieldProps) {
  return (
    <Field className={clsx('mt-20 flex flex-col gap-40')}>
      {label && <Label>{label}</Label>}
      {children}
    </Field>
  )
}

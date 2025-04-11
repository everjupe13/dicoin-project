import { type ReactNode } from 'react'

import { Field, Label } from '@/components/shared/fieldset'

export interface FormFieldProps {
  label?: string
  children?: ReactNode
}

export function FormField({ children, label }: FormFieldProps) {
  return (
    <Field>
      {label && <Label>{label}</Label>}
      {children}
    </Field>
  )
}

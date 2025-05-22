import clsx from 'clsx'
import { type ReactNode } from 'react'
import { FieldValues, useFormContext } from 'react-hook-form'

import { ErrorMessage, Field, Label } from '@/components/shared/fieldset'

import { FormFieldProvider } from '../providers/form-field-provider'

export interface FormFieldProps {
  name: string
  label?: string

  children?: ReactNode
  className?: string
}

export function FormField({
  children,
  label,
  name,
  className
}: FormFieldProps) {
  const {
    formState: { errors }
  } = useFormContext<FieldValues>()

  const error = errors[name]?.message as string | undefined

  return (
    <FormFieldProvider name={name}>
      <Field className={clsx(className)}>
        {label && <Label>{label}</Label>}

        {children}

        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Field>
    </FormFieldProvider>
  )
}

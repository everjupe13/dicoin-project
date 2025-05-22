import { useFormContext, useFormState, useWatch } from 'react-hook-form'

import { useFormFieldContext } from '../providers/form-field-provider'

export function useFormField() {
  const { name } = useFormFieldContext()
  const { control } = useFormContext()
  const { errors, touchedFields, dirtyFields } = useFormState({ control, name })
  const value = useWatch({ control, name })

  const error = errors?.[name]
  const isTouched = !!touchedFields?.[name]
  const isDirty = !!dirtyFields?.[name]

  return {
    name,
    value,
    error,
    errorMessage: error?.message as string | undefined,
    isTouched,
    isDirty
  }
}

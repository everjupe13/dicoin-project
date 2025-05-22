import { createContext, useContext } from 'react'

export type FormFieldContextType = {
  readonly name: string
}

export const FormFieldContext = createContext<FormFieldContextType | undefined>(
  undefined
)

export function useFormFieldContext() {
  const context = useContext(FormFieldContext)
  if (!context) {
    throw new Error('useFormFieldContext must be used within a <FormField>')
  }

  return context
}

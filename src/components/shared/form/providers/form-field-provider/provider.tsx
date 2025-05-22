import { type ReactNode } from 'react'

import { FormFieldContext } from './context'

export interface FormFieldProviderProps {
  name: string
  children: ReactNode
}

export function FormFieldProvider({ name, children }: FormFieldProviderProps) {
  return (
    <FormFieldContext.Provider value={{ name }}>
      {children}
    </FormFieldContext.Provider>
  )
}

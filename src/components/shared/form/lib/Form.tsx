import { type FormEvent, type ReactNode } from 'react'

export interface FormProps {
  children?: ReactNode

  onSubmit?: () => void
}

export function Form({ children, onSubmit }: FormProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    onSubmit?.()
  }

  return <form onSubmit={handleSubmit}>{children}</form>
}

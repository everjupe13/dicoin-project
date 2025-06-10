import { type ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'

export interface ToastProviderProps {
  children?: ReactNode
}

export function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      <ToastContainer autoClose={2000} />
      {children}
    </>
  )
}

import { createContext } from 'react'

import { ToastProviderProps } from './provider'

export interface ToastContextType {
  add: (toast: ToastProviderProps) => void
  remove?: (id: number) => void
  removeAll?: (toast: ToastProviderProps) => void
}

export const ToastContext = createContext<ToastContextType | null>(null)

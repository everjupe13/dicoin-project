import { createContext } from 'react'

import { ToastOptions } from '@/components/shared/toast'

export interface ToastContextType {
  add: (toast: ToastOptions) => void
  remove?: (toast: ToastOptions) => void
  removeAll?: (toast: ToastOptions) => void
}

export const ToastContext = createContext<ToastContextType | null>(null)

import { createContext, ReactNode, useContext, useState } from 'react'

import { ToastNotification } from '@/components/shared/toast'

interface ToastProps {
  severity?: 'success' | 'warn' | 'error'
  summary?: string
  detail?: string
}

interface ToastContextType {
  add: (toast: ToastProps) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

export function ProvidersToast({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const add = (toast: ToastProps) => {
    setToasts(prev => [...prev, toast])
    setTimeout(() => {
      setToasts(prev => prev.slice(1))
    }, 3000)
  }

  return (
    <ToastContext.Provider value={{ add }}>
      {children}
      <div className="fixed right-5 top-5 z-50 flex flex-col gap-2">
        {toasts.map((toast, index) => (
          <ToastNotification key={index} toast={toast} />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

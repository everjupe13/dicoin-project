import { ReactNode, useState } from 'react'

import { ToastNotification, ToastOptions } from '@/components/shared/toast'

import { ToastContext } from './context'

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastOptions[]>([])
  const [count, setCount] = useState(0)

  const add = (toast: ToastOptions) => {
    setCount(prev => prev + 1)
    toast.id = count
    setToasts(prev => [...prev, toast])
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== count))
    }, 15_000)
  }

  const remove = (id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }

  return (
    <ToastContext.Provider value={{ add }}>
      {children}
      <div className="fixed right-5 top-5 z-50 flex flex-col gap-2">
        {toasts.map(toast => (
          <ToastNotification
            key={toast.id}
            {...toast}
            onRemove={() => remove(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

import { type ReactNode } from 'react'

import { ReactQueryProvider } from '@/providers/react-query'
import { ToastProvider } from '@/providers/toast-provider'

export interface ProvidersContainerProps {
  children?: ReactNode
}

export function ProvidersContainer({ children }: ProvidersContainerProps) {
  return (
    <ReactQueryProvider>
      <ToastProvider>{children}</ToastProvider>
    </ReactQueryProvider>
  )
}

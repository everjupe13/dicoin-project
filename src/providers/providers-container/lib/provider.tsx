import { type ReactNode } from 'react'

import { AuthProvider } from '@/providers/auth-provider'
import { ReactQueryProvider } from '@/providers/react-query'
import { ToastProvider } from '@/providers/toast-provider/lib/provider'

export interface ProvidersContainerProps {
  children?: ReactNode
}

export function ProvidersContainer({ children }: ProvidersContainerProps) {
  return (
    <ReactQueryProvider>
      <ToastProvider>
        <AuthProvider>{children}</AuthProvider>
      </ToastProvider>
    </ReactQueryProvider>
  )
}

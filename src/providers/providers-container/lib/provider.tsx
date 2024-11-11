import { type ReactNode } from 'react'

import { AuthProvider } from '@/providers/auth-provider'
import { ReactQueryProvider } from '@/providers/react-query'

export interface ProvidersContainerProps {
  children?: ReactNode
}

export function ProvidersContainer({ children }: ProvidersContainerProps) {
  return (
    <ReactQueryProvider>
      <AuthProvider>{children}</AuthProvider>
    </ReactQueryProvider>
  )
}

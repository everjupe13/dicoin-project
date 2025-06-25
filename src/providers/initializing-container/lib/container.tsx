import { ReactNode } from 'react'

import { useAuthCheckAuth } from '@/api/modules/auth'

export interface InitializingContainerProps {
  children?: ReactNode
}

export function InitializingContainer({
  children
}: InitializingContainerProps) {
  const { isLoading } = useAuthCheckAuth()

  if (isLoading) return null

  return <>{children}</>
}

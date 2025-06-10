import { ReactNode } from 'react'

import { Heading } from '@/components/shared/heading'

export interface AuthFormWrapperProps {
  title?: string
  children?: ReactNode
  className?: string
}

export function AuthFormWrapper({ title, children }: AuthFormWrapperProps) {
  return (
    <div className="w-full max-w-sm">
      <Heading className="mb-8">{title}</Heading>
      {children}
    </div>
  )
}

import { type ReactNode } from 'react'

import { Heading } from '@/components/shared/heading'

export interface PageLayoutProps {
  title?: string
  children?: ReactNode
}

export function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <div>
      {title && (
        <div className="mb-8">
          <Heading>{title}</Heading>
        </div>
      )}
      {children}
    </div>
  )
}

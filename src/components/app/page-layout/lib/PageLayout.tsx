import { type ReactNode } from 'react'

export interface PageLayoutProps {
  title?: string
  children?: ReactNode
}

export function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <div>
      <div>
        {title && (
          <h1 className="font-semibold text-zinc-950 text-20 sm:text-24 dark:text-white">
            {title}
          </h1>
        )}
      </div>
      {children}
    </div>
  )
}

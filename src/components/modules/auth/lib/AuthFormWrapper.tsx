import clsx from 'clsx'
import { ReactNode } from 'react'

export interface AuthFormWrapperProps {
  title?: string
  children?: ReactNode
  className?: string
}

export function AuthFormWrapper({ title, children }: AuthFormWrapperProps) {
  return (
    <section className={clsx('w-full max-w-[380px] p-2')}>
      <div>
        <h1 className="font-semibold text-text text-24 dark:text-white">
          {title}
        </h1>
        {children}
      </div>
    </section>
  )
}

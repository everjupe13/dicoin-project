import { clsx } from 'clsx'
import { FC, ReactNode } from 'react'

interface IAppTitle {
  children?: ReactNode
  className?: string
  titleClassName?: string
}

export const AppTitle: FC<IAppTitle> = ({
  children,
  className,
  titleClassName
}) => {
  return (
    <div className={clsx('flex items-center justify-between', className)}>
      <h2 className={clsx('text-medium-48', titleClassName)}>{children}</h2>
      <div className="flex items-center gap-x-8">
        <span className="block h-24 w-24 rounded-[100%] bg-green/25"></span>
        <span className="block h-24 w-24 rounded-[100%] bg-green"></span>
      </div>
    </div>
  )
}

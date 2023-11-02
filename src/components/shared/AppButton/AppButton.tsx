import { clsx } from 'clsx'
import { ButtonHTMLAttributes, FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'

import { ArrowUpRightIcon } from '@/components/shared/icons/ArrowUpRightIcon'

import styles from './AppButton.module.scss'
import { ButtonSize, ButtonVariant } from './AppButton.types'

interface IAppButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  link?: boolean
  to?: LinkProps['to']
}

export const AppButton: FC<IAppButton> = ({
  variant = 'primary',
  size = 'normal',
  link = false,
  to = '/',
  children,
  className,
  ...props
}) => {
  return (
    <>
      {link ? (
        <Link
          className={clsx(
            'flex items-center justify-center gap-x-10',
            styles[variant],
            styles[size],
            className
          )}
          to={to}
        >
          <span>{children}</span>
          <span>
            <ArrowUpRightIcon />
          </span>
        </Link>
      ) : (
        <button
          className={clsx(styles[variant], styles[size], className)}
          {...props}
        >
          {children}
        </button>
      )}
    </>
  )
}

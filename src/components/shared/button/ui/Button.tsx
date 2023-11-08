import { clsx } from 'clsx'
import { ButtonHTMLAttributes, FC } from 'react'

import styles from './Button.module.scss'
import { ButtonSize, ButtonVariant } from './Button.types'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

const Button: FC<Props> = ({
  variant = 'primary',
  size = 'normal',
  children,
  className,
  ...props
}) => {
  return (
    <>
      <button
        className={clsx(
          'flex items-center justify-center rounded-[6px]',
          styles[variant],
          styles[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    </>
  )
}

export default Button

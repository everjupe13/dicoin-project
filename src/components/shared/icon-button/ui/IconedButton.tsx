import { clsx } from 'clsx'
import { ButtonHTMLAttributes, FC } from 'react'

import styles from './IconedButton.module.scss'
import { IconedButtonSize, IconedButtonVariant } from './IconedButton.type'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: IconedButtonVariant
  size?: IconedButtonSize
}

const IconedButton: FC<Props> = ({
  variant = 'dark',
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

export default IconedButton

import clsx from 'clsx'

import styles from './button-pagination.module.css'

export interface ButtonPaginationProps {
  text?: string | number
  variant?: 'interactive' | 'non-interactive'
  active?: boolean
  onClick?: () => void
}

const NON_INTERACTIVE_TEXT = '...'

export function ButtonPagination({
  text,
  variant = 'interactive',
  active = false,
  onClick
}: ButtonPaginationProps) {
  const isInteractive = variant === 'interactive'
  const computedText = isInteractive ? text : NON_INTERACTIVE_TEXT

  return (
    <div
      className={clsx(
        'h-30 w-29 flex items-center justify-center rounded-full border border-[#646363] font-medium text-white text-14',
        isInteractive && 'cursor-pointer',
        active && isInteractive && styles.active,
        styles[variant]
      )}
      onClick={onClick}
    >
      {computedText}
    </div>
  )
}

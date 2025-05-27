import { clsx } from 'clsx'

import { CloseIcon } from '../../icons/CloseIcon'
import { ToastOptions } from '../index'
import styles from './toast-notification.module.scss'

export interface ToastNotificationProps extends ToastOptions {
  closable?: boolean | undefined
  life?: number | undefined
  onRemove: () => void
}

export function ToastNotification({
  severity = 'error',
  summary,
  detail,
  onRemove
}: ToastNotificationProps) {
  return (
    <>
      <div
        className={clsx(
          `relative min-h-10 w-[300px]  rounded-5 p-10 `,
          severity && styles[severity]
        )}
      >
        <div>
          <header>{summary}</header>
          <img src="" alt="" />
        </div>
        <div>
          <span>{detail}</span>
        </div>
        <button className=" absolute right-10 top-5" onClick={() => onRemove()}>
          <CloseIcon />
        </button>
      </div>
    </>
  )
}

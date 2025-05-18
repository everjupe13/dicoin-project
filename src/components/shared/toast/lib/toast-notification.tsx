import { clsx } from 'clsx'
import { useState } from 'react'

import styles from './toast-notification.module.scss'

interface ToastProps {
  severity?: 'success' | 'warn' | 'error'
  summary?: string
  detail?: string
}

export function ToastNotification({ toast }: { toast: ToastProps }) {
  const [close, setClose] = useState(false)
  return (
    <>
      <div
        className={clsx(
          `relative min-h-10 w-[300px]  rounded-5 p-10 `,
          close ? 'hidden' : 'block',
          toast.severity && styles[toast.severity]
        )}
      >
        <div>
          <header>{toast.summary}</header>
          <img src="" alt="" />
        </div>
        <div>
          <span>{toast.detail}</span>
        </div>
        <button
          className=" absolute right-10 top-5"
          onClick={() => setClose(true)}
        >
          X
        </button>
      </div>
    </>
  )
}

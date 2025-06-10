import { toast } from 'react-toastify'

import type { ToastServiceAddOptions } from '../types'

export function useToast() {
  const add = ({ message, type }: ToastServiceAddOptions) => {
    return toast(message, {
      type: type
    })
  }

  return {
    add
  }
}

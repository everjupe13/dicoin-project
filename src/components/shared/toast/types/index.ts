export interface ToastOptions {
  id: number
  severity?: 'success' | 'warn' | 'error'
  summary?: string
  detail?: string
}

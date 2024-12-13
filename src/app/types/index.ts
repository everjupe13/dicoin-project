export type ButtonedUIThemes =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'

export type ApiResponse<T> = {
  message: string
  data: T | null
}

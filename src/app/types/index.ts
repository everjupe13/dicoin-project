export type ButtonedUIThemes =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'

export type ApiResponse<T, P> = {
  message: string
  data: T | null
  pagination?: P | null
}

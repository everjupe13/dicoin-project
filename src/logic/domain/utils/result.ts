export interface Result<T> {
  isFail: boolean
  isSuccess: boolean
  data: T
}

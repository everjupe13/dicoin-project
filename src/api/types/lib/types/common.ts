import { AxiosError } from 'axios'

export type HttpApiSuccessResponse<T> = {
  data: T
  error: null
  message: string
}

export type HttpApiErrorResponse = {
  data: null
  error: AxiosError | unknown
  message: string
}

export type HttpApiResponse<T> =
  | HttpApiSuccessResponse<T>
  | HttpApiErrorResponse

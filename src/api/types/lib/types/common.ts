export type HttpApiSuccessResponse<T> = {
  data: T
  error: null
}

export type HttpApiErrorResponse = {
  data: null
  error: {
    code: string
    message: string
  }
}

export type HttpApiResponse<T> =
  | HttpApiSuccessResponse<T>
  | HttpApiErrorResponse

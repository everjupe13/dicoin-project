export type HttpApiResponse<T> =
  | {
      data: T
      error: null
    }
  | {
      data: null
      error: string
    }

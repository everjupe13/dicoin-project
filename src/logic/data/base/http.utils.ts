import { HTTP_SATISFIED_STATUS_CODES } from './http.constants'
import { HttpResponseGuardOptions } from './http.types'

// HttpDoubtfulResult
// HttpSatisfiedResult

export const HttpResponseGuard = {
  isSatisfiedByCode: (status: number, options?: HttpResponseGuardOptions) => {
    return (
      options?.additionalStatusCodes
        ? [...HTTP_SATISFIED_STATUS_CODES, ...options.additionalStatusCodes]
        : HTTP_SATISFIED_STATUS_CODES
    ).includes(status)
  }
}

export const HttpResponseResult = {
  successed: <T>(data: T) => ({
    isSuccess: true,
    data,
    errors: null
  }),
  failed: () => ({
    isSuccess: false,
    data: null,
    errors: null
  })
}

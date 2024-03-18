import { ZodError } from 'zod'

interface GuardSafeResultSuccess<T> {
  success: true
  data: T
}

interface GuardSafeResultFail {
  success: false
  error: ZodError
}

export type GuardSafeResult<T> = GuardSafeResultSuccess<T> | GuardSafeResultFail

import { z } from 'zod'

import { GuardSafeResult } from './guard.types'

export class Guard {
  static againstNullOrUndefined(value: any) {
    return value === undefined || value === null
  }
  static isString(value: any): GuardSafeResult<string> {
    return z.string().safeParse(value)
  }

  /**
   * Checks if the value is non-empty string
   * @example
   * isSinificantString(' ') // false
   * isSinificantString(2) // false
   * isSinificantString('foo') // true
   */
  static isSignificantString(value: any): GuardSafeResult<string> {
    return z.string().safeParse(value.trim())
  }

  static isNumber(value: any): GuardSafeResult<number> {
    return z.number().safeParse(value)
  }
}

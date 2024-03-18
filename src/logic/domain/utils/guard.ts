export class Guard {
  static againstNullOrUndefined(value: any) {
    return value === undefined || value === null
  }
  static isString(value: any) {
    return typeof value === 'string'
  }

  /**
   * Checks if the value is non-empty string
   * @example
   * isSinificantString(' ') // false
   * isSinificantString(2) // false
   * isSinificantString('foo') // true
   * @throws {Error} if user is not authorized
   */
  static isSignificantString(value: any) {
    return this.isString(value) && Boolean(value.trim())
  }
}

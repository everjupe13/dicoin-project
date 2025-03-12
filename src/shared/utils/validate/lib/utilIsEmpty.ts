export function utilIsEmpty(value: any): boolean {
  return (
    value === null ||
    value === undefined ||
    value === '' ||
    (Array.isArray(value) && value.length === 0) ||
    (!(value instanceof Date) &&
      typeof value === 'object' &&
      Object.keys(value).length === 0)
  )
}

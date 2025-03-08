export function utilIsDefined(value: any): boolean {
  return value !== null && value !== undefined && !Number.isNaN(value)
}

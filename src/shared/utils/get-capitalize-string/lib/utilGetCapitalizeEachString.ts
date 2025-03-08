import { utilGetCapitalizeString } from './utilGetCapitalizeString'

export function utilGetCapitalizeEachString(
  value: string,
  divider = '-'
): string {
  return value
    .split(divider)
    .map(v => utilGetCapitalizeString(v))
    .join(',')
}

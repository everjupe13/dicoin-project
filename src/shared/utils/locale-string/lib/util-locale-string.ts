import { getConfig } from '@/shared/const'
import type { LocaleCodes, LocaleString } from '@/shared/types'

export const utilLocaleString = (
  value?: LocaleString | string | null,
  lang?: LocaleCodes
): string => {
  if (!value) {
    return ''
  }

  const langCode = lang || getConfig().lang

  if (value instanceof String) {
    return value as string
  }

  if (value instanceof Object) {
    return value[langCode] || value.ru || ''
  }

  return ''
}

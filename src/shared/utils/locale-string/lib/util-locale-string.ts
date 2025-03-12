import { getConfig } from '@/shared/const'
import type { LocaleCodes, LocaleString } from '@/shared/types'

export const utilLocaleString = (
  value?: LocaleString | string | null,
  lang?: LocaleCodes
) => {
  if (!value) {
    return ''
  }

  const langCode = lang || getConfig().lang

  if (value instanceof String) {
    return value
  }

  if (value instanceof Object) {
    return value[langCode] || value.ru || ''
  }

  return ''
}

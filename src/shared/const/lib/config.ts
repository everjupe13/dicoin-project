import { LocaleCodes } from '@/shared/types'

export interface Config {
  lang: LocaleCodes

  appName: string
}

export function getConfig(): Config {
  return {
    lang: 'ru',

    appName: 'dicoin'
  }
}

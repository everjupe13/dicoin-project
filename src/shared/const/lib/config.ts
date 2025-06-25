import { LocaleCodes } from '@/shared/types'

export interface Config {
  lang: LocaleCodes

  appName: string

  storageKeys: {
    auth: 'x-auth-token'
    authRefresh: 'x-refresh-token'
  }
}

export function getConfig(): Config {
  return {
    lang: 'ru',

    appName: 'dicoin',

    storageKeys: {
      auth: 'x-auth-token',
      authRefresh: 'x-refresh-token'
    }
  }
}

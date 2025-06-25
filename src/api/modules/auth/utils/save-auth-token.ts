import { getConfig } from '@/shared/const'

export function utilSaveToken(value: string, refresh?: boolean) {
  const config = getConfig()
  const tokenKey = refresh
    ? config.storageKeys.authRefresh
    : config.storageKeys.auth

  localStorage.setItem(tokenKey, value)
}

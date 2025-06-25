import { getConfig } from '@/shared/const'

export function utilGetAuthToken(refresh?: boolean) {
  const config = getConfig()
  const tokenKey = refresh
    ? config.storageKeys.authRefresh
    : config.storageKeys.auth

  return localStorage.getItem(tokenKey)
}

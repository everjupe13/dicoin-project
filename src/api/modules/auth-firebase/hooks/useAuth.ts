import { HttpApiResponse } from '@/api/types'
import type { User } from '@/shared/types'

import { auth, openGoogleAuthPopup } from '../lib/firebase/service'

export interface UseAuthInterface {
  // TODO реализовать функционал авторизации через бэк
  // с логином и паролем
  // authByLogin: () => Promise<void>

  authByGooglePopup: () => Promise<HttpApiResponse<User>>
  logout: () => Promise<void>
}

export function useAuth() {
  const init = async () => {}

  const authByGooglePopup = async () => {
    const authResult = await openGoogleAuthPopup()

    if ('user' in authResult && authResult.user) {
      return {
        data: authResult.user,
        error: null
      }
    }

    // TODO поправить обработку ошибок
    return { data: null, error: 'some error' }
  }

  const logout = async () => {
    await auth.signOut()
    window.location.reload()
  }

  return {
    init,
    authByGooglePopup,
    logout
  }
}

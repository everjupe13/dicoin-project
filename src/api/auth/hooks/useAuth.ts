import type { User } from '@/shared/types'
import type { ApiResponse } from '@/types/api/response'

import { auth, openGoogleAuthPopup } from '../lib/firebase/service'

export interface UseAuthInterface {
  // TODO реализовать функционал авторизации через бэк
  // с логином и паролем
  // authByLogin: () => Promise<void>

  authByGooglePopup: () => Promise<ApiResponse<User>>
  logout: () => Promise<void>
}

export function useAuth(): UseAuthInterface {
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
    authByGooglePopup,
    logout
  }
}

import { useMutation } from '@tanstack/react-query'

import { authService } from '@/api/modules/auth'
import type { AuthLoginPayload } from '@/api/types/auth'

import { utilSaveToken } from '../utils/save-auth-token'

export function useAuthLoginMutation() {
  return useMutation({
    mutationFn: async (payload: AuthLoginPayload) => {
      const response = await authService.login(payload)

      if (response.data) {
        utilSaveToken(response.data.accessToken)
        utilSaveToken(response.data.refreshToken, true)
      }

      return response
    }
  })
}

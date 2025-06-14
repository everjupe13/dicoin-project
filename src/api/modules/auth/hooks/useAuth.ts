import { useMutation } from '@tanstack/react-query'

import { authService } from '@/api/modules/auth'
import type { AuthLoginPayload, AuthSignupPayload } from '@/api/types/auth'

export function useAuth() {
  const loginMutation = useMutation({
    mutationFn: async (payload: AuthLoginPayload) => {
      const response = await authService.login(payload)

      if (response.data) {
        localStorage.setItem('x-auth-token', response.data.accessToken)
        localStorage.setItem('x-auth-refresh-token', response.data.refreshToken)
      }

      return response
    }
  })

  const signupMutation = useMutation({
    mutationFn: async (payload: AuthSignupPayload) => {
      return await authService.signup(payload)
    }
  })

  return {
    loginMutation,
    signupMutation
  }
}

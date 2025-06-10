import { useMutation } from '@tanstack/react-query'

import { authService } from '@/api/modules/auth'
import type { AuthLoginPayload, AuthSignupPayload } from '@/api/types/auth'

export function useAuth() {
  const loginMutation = useMutation({
    mutationFn: async (payload: AuthLoginPayload) => {
      return await authService.login(payload)
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

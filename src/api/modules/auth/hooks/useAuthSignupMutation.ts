import { useMutation } from '@tanstack/react-query'

import { authService } from '@/api/modules/auth'
import type { AuthSignupPayload } from '@/api/types/auth'

export function useAuthSignupMutation() {
  return useMutation({
    mutationFn: async (payload: AuthSignupPayload) => {
      return await authService.signup(payload)
    }
  })
}

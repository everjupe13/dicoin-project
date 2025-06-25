import { useQuery } from '@tanstack/react-query'

import { authService } from '../lib/auth.service'

export const AUTH_CHECK_AUTH_RQ_KEY = 'auth-check-auth'

export function useAuthCheckAuth() {
  return useQuery({
    queryKey: [AUTH_CHECK_AUTH_RQ_KEY],
    queryFn: async () => {
      const { data } = await authService.checkAuth()

      return {
        isAuth: Boolean(data?.isAuth)
      }
    },
    initialData: () => ({ isAuth: false }),
    staleTime: Number.POSITIVE_INFINITY
  })
}

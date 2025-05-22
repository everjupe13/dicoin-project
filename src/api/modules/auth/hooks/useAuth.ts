import { useMutation } from '@tanstack/react-query'

import { authService } from '@/api/modules/auth'

export function useAuth() {
  const mutation = useMutation({
    mutationFn: async () => {
      return await authService.login()
    }
  })

  return mutation
}

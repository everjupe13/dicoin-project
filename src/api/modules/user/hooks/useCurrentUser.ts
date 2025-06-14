import { useQuery } from '@tanstack/react-query'

import { userService } from '../lib/user.service'

export const CURRENT_USER_RQ_KEY = 'current-user'

export const useCurrentUser = () => {
  return useQuery({
    queryKey: [CURRENT_USER_RQ_KEY],
    queryFn: async () => {
      const { data } = await userService.getMe()

      return {
        id: data?.id,
        email: data?.email,
        fullName: data?.fullName
      }
    }
  })
}

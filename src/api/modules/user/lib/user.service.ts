import { apiClient } from '@/api/clients/http'
import { UserResponse } from '@/api/types/user'

export const userService = {
  getMe: async () => {
    const request = await apiClient.get<UserResponse>('/user/current')

    return request
  }
}

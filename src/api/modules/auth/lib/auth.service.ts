import { apiClient } from '@/api/clients/http'
import type {
  AuthLoginPayload,
  AuthLoginResponse,
  AuthSignupPayload,
  AuthSignupResponse
} from '@/api/types/auth'

export const authService = {
  login: async (payload: AuthLoginPayload) => {
    const request = await apiClient.post<AuthLoginResponse>('/auth/login', {
      data: payload
    })

    return request
  },

  signup: async (payload: AuthSignupPayload) => {
    const request = await apiClient.post<AuthSignupResponse>('/auth/signup', {
      data: payload
    })

    return request
  }
}

import { apiClient } from '@/api/clients/http'
import { HttpApiResponse } from '@/api/types'
import type {
  AuthCheckPermissionResponse,
  AuthLoginPayload,
  AuthLoginResponse,
  AuthSignupPayload,
  AuthSignupResponse
} from '@/api/types/auth'

import { utilGetAuthToken } from '../utils/get-auth-token'

export const authService = {
  checkAuth: async (): Promise<
    HttpApiResponse<AuthCheckPermissionResponse>
  > => {
    return new Promise(resolve => {
      const authToken = utilGetAuthToken()

      return resolve({
        data: { isAuth: Boolean(authToken) },
        error: null
      })
    })
  },

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

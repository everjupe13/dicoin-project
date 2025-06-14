import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'

import type { HttpApiResponse, HttpApiSuccessResponse } from '@/api/types'
import { ERROR_CODES } from '@/api/types'
import { AuthRefreshResponse } from '@/api/types/auth'
import { ENV, ROUTES } from '@/shared/const'

let isRefreshing = false
let refreshSubscribers: Array<() => void> = []

function subscribeTokenRefresh(callback: () => void) {
  refreshSubscribers.push(callback)
}

function onTokenRefreshed() {
  refreshSubscribers.forEach(callback => callback())
  refreshSubscribers = []
}

async function refreshToken(): Promise<void> {
  const { data }: AxiosResponse<HttpApiSuccessResponse<AuthRefreshResponse>> =
    await axios.request({
      method: 'post',
      baseURL: ENV.API_URL,
      url: '/auth/refresh',
      withCredentials: true,
      timeout: 5000,
      headers: {
        'X-Refresh-Token': localStorage.getItem('x-auth-refresh-token')
      }
    })

  if (data) {
    const { refreshToken, accessToken } = data.data
    localStorage.setItem('x-auth-token', accessToken)
    localStorage.setItem('x-auth-refresh-token', refreshToken)
  }
}

async function makeRequest<T>(
  method: 'get' | 'post' | 'put' | 'patch' | 'delete',
  url: string,
  options: AxiosRequestConfig | undefined
): Promise<HttpApiResponse<T>> {
  const token = localStorage.getItem('x-auth-token')

  const config: AxiosRequestConfig = {
    ...options,

    headers: {
      ...options?.headers,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      'Content-Type': 'application/json'
    },
    baseURL: ENV.API_URL,
    withCredentials: true,
    // withXSRFToken

    timeout: 5000,

    url,
    method
  }

  try {
    const { data }: AxiosResponse<HttpApiSuccessResponse<T>> =
      await axios.request(config)

    return { data: data.data, error: null }
  } catch (error) {
    const originalRequest = config

    if (
      axios.isAxiosError(error) &&
      error.response?.data?.error?.code === ERROR_CODES.UNAUTHORIZED_STALED
    ) {
      if (!isRefreshing) {
        isRefreshing = true
        try {
          localStorage.removeItem('x-auth-token')

          await refreshToken()
          isRefreshing = false
          onTokenRefreshed()
        } catch (error_) {
          isRefreshing = false
          console.error('REFRESH TOKEN ERROR', error_)

          window.location.href = ROUTES.AUTH.SIGN_IN

          return {
            data: null,
            error: {
              code: ERROR_CODES.UNAUTHORIZED,
              message: 'Ошибка обновления токена'
            }
          }
        }
      }

      return new Promise(resolve => {
        subscribeTokenRefresh(async () => {
          const newToken = localStorage.getItem('x-auth-token')
          if (newToken) {
            originalRequest.headers = {
              ...originalRequest.headers,
              Authorization: `Bearer: ${newToken}`
            }
          }

          try {
            const { data }: AxiosResponse<HttpApiSuccessResponse<T>> =
              await axios.request(originalRequest)
            resolve({
              data: data.data,
              error: null
            })
          } catch {
            resolve({
              data: null,
              error: {
                code: '',
                message: 'Не удалось обновить авторизироваться'
              }
            })
          }
        })
      })
    }

    return { data: null, error: { code: '', message: 'Что-то пошло не так' } }
  }
}

export const apiClient = {
  async get<T>(url: string, options?: AxiosRequestConfig) {
    return makeRequest<T>('get', url, options)
  },

  async post<T>(url: string, options?: AxiosRequestConfig) {
    return makeRequest<T>('post', url, options)
  },

  async put<T>(url: string, options?: AxiosRequestConfig) {
    return makeRequest<T>('put', url, options)
  },

  async patch<T>(url: string, options?: AxiosRequestConfig) {
    return makeRequest<T>('patch', url, options)
  },

  async delete<T>(url: string, options?: AxiosRequestConfig) {
    return makeRequest<T>('delete', url, options)
  }
}

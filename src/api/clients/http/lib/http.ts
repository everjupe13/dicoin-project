import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'

import type { HttpApiResponse, HttpApiSuccessResponse } from '@/api/types'
import { ENV } from '@/shared/const'

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
      ...(token ? { Authorization: `Bearer: ${token}` } : {}),
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

    return { data: data.data, error: null, message: data.message }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { data: null, error: error, message: 'Что-то пошло не так' }
    }
    return { data: null, error: error, message: 'Что-то пошло не так' }
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

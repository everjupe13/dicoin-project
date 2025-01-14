import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

const basePath = 'http://176.53.163.14:3000'

export const apiClient = {
  async get<T>(
    url: string,
    options?: AxiosRequestConfig
  ): Promise<{ data: T | null; error: AxiosError | null }> {
    return initApiClient('get', url, options)
  },

  async post<T>(
    url: string,
    options?: AxiosRequestConfig
  ): Promise<{ data: T | null; error: AxiosError | null }> {
    return initApiClient('post', url, options)
  },

  async put<T>(
    url: string,
    options?: AxiosRequestConfig
  ): Promise<{ data: T | null; error: AxiosError | null }> {
    return initApiClient('put', url, options)
  },

  async patch<T>(
    url: string,
    options?: AxiosRequestConfig
  ): Promise<{ data: T | null; error: AxiosError | null }> {
    return initApiClient('patch', url, options)
  },

  async delete<T>(
    url: string,
    options?: AxiosRequestConfig
  ): Promise<{ data: T | null; error: AxiosError | null }> {
    return initApiClient('delete', url, options)
  }
}

async function initApiClient<T>(
  method: 'get' | 'post' | 'put' | 'patch' | 'delete',
  url: string,
  options: AxiosRequestConfig | undefined
): Promise<{ data: T | null; error: AxiosError | null }> {
  const token = localStorage.getItem('x-auth-token')

  const config: AxiosRequestConfig = {
    ...options,
    headers: {
      ...options?.headers,
      ...(token ? { Authorization: `${token}` } : {})
    },
    baseURL: basePath,
    url,
    method
  }

  try {
    const response: AxiosResponse<T> = await axios.request(config)
    return { data: response.data, error: null }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { data: null, error: error }
    }
    return { data: null, error: null }
  }
}

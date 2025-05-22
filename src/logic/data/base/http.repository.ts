import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { joinURL } from 'ufo'

import { ENV } from '@/shared/const'

import { HttpSafeRequestOptions } from './http.types'
import { HttpResponseGuard, HttpResponseResult } from './http.utils'

export class HttpRepository {
  axios: AxiosInstance
  endpoint: string
  apiHost: string

  constructor(endpoint?: string) {
    this.axios = axios
    this.endpoint = endpoint || ''
    // this.apiHost = ENV.API_HOST
    this.apiHost = ENV.API_URL
  }

  setEndpoint(endpoint: string) {
    this.endpoint = endpoint
  }

  /**
   * Always use this method to get endpoint path
   *
   * @example
   * process.env.API_HOST = 'https://api.com'
   *
   * class XService extends Service {}
   *
   * const service = new Service('api/v1/products')
   *
   * service.getPath() => 'https://api.com/api/v1/products'
   * service.getPath('all') => 'https://api.com/api/v1/products/all'
   * service.getPath(1, 'get') => 'https://api.com/api/v1/products/1/get'
   */
  protected getPath(...input: any[]) {
    return joinURL(this.apiHost, this.endpoint, ...input.map(x => x.toString()))
  }

  async makeSafeRequest<TResponse>(
    axiosConfig: AxiosRequestConfig,
    { additionalStatusCodes }: HttpSafeRequestOptions = {}
  ) {
    const buildOptionsForGuard = () => {
      return {
        ...(additionalStatusCodes
          ? {
              additionalStatusCodes: Array.isArray(additionalStatusCodes)
                ? additionalStatusCodes
                : Number.isInteger(additionalStatusCodes)
                ? [additionalStatusCodes]
                : undefined
            }
          : {})
      }
    }

    try {
      const { status, data } = await this.axios.request<TResponse>(axiosConfig)

      if (HttpResponseGuard.isSatisfiedByCode(status, buildOptionsForGuard())) {
        return HttpResponseResult.successed<TResponse>(data)
      }

      return HttpResponseResult.failed()
    } catch {
      return HttpResponseResult.failed()
    }
  }
}

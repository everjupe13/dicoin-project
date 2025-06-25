import { apiClient } from '@/api/clients/http'
import {
  TelegramGetConnectionStatusResponse,
  TelegramGetLinkResponse,
  TelegramSendOtpCodeResponse
} from '@/api/types/telegram'

export const telegramService = {
  getConnectionLink: async () => {
    const request = await apiClient.post<TelegramGetLinkResponse>(
      '/tg/connection-link'
    )

    return request
  },

  getConnectionStatus: async () => {
    const request = await apiClient.get<TelegramGetConnectionStatusResponse>(
      '/tg/connection-status'
    )

    return request
  },

  sendOtpCode: async (payload: { code: string }) => {
    const request = await apiClient.post<TelegramSendOtpCodeResponse>(
      '/tg/send-otp-code',
      {
        data: {
          ...payload
        }
      }
    )

    return request
  }
}

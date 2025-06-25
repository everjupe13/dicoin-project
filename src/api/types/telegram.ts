export type TelegramGetLinkResponse = {
  link: string
}

export type TelegramGetConnectionStatusResponse = {
  status: 'connected' | 'disconnected'
}

export type TelegramSendOtpCodeResponse = {
  code: string
}

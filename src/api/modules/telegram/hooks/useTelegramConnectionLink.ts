import { useQuery } from '@tanstack/react-query'

import { telegramService } from '../lib/telegram.service'

export const TG_CONNECTION_LINK_QUERY_KEY = 'tg-connection-link'

export const useTelegramConnectionLink = () => {
  return useQuery({
    queryKey: [TG_CONNECTION_LINK_QUERY_KEY],
    queryFn: async () => {
      const { data } = await telegramService.getConnectionLink()

      return {
        link: data?.link
      }
    }
  })
}

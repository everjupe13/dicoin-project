import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import dayjs from 'dayjs'
import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: dayjs.duration(5, 'minutes').asMilliseconds()
    }
  }
})

export const ReactQueryProvider: FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default ReactQueryProvider

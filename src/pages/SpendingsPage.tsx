import { useEffect, useState } from 'react'

import { apiClient } from '@/api'
import type { ISpendings } from '@/api/types/ISpendings'
import { Pagination } from '@/components/shared/pagination'
import { mapSpendings } from '@/components/spendings/spendings-card'
import { SpendingsCardProps } from '@/components/spendings/spendings-card'
import { SpendingsList } from '@/components/spendings/spendings-list'

export function SpendingsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [spendingsData, setSpendingsData] = useState<SpendingsCardProps[]>([])
  const [totalPages, setTotalPages] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchSpendings() {
      setIsLoading(true)

      const { data, error } = await apiClient.get<{
        data: Partial<ISpendings>[]
        pagination: {
          page: number
          per_page: number
          total_items: number
          total_pages: number
        }
      }>('/spending', {
        params: { page: currentPage, per_page: 10 }
      })

      if (error) {
        setError(error.message)
      }
      if (data) {
        setSpendingsData(mapSpendings(data.data || []))
        setTotalPages(data.pagination.total_pages || 1)
      }

      setIsLoading(false)
    }

    fetchSpendings()
  }, [currentPage])

  return (
    <div className="flex flex-col gap-20">
      {isLoading && <div>Загрузка...</div>}
      {error && <div>Ошибка: {error}</div>}
      {!isLoading && !error && <SpendingsList items={spendingsData} />}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  )
}

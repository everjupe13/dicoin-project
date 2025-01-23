import { useEffect, useState } from 'react'

import { apiClient } from '@/api'
import type { ISpendings } from '@/api/types/ISpendings'
import { ApiResponse } from '@/app/types'
import { Pagination } from '@/components/shared/pagination'
import { mapSpendings } from '@/components/spendings/spendings-card'
import { SpendingsCardProps } from '@/components/spendings/spendings-card'
import { SpendingsList } from '@/components/spendings/spendings-list'

interface IPagination {
  page: number
  per_page: number
  total_items: number
  total_pages: number
}

export function SpendingsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [spendingsData, setSpendingsData] = useState<SpendingsCardProps[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [paginationData, setPaginationData] = useState({
    page: 0,
    per_page: 10,
    total_items: 0,
    total_pages: 1
  })

  useEffect(() => {
    let ignor = false
    async function fetchSpendings() {
      if (!ignor) {
        setIsLoading(true)

        const { data, error } = await apiClient.get<
          ApiResponse<ISpendings[], IPagination>
        >('/spending', {
          params: { page: currentPage, per_page: paginationData.per_page }
        })

        if (error) {
          setError(error.message)
        }
        if (data) {
          setSpendingsData(mapSpendings(data.data || []))
          setPaginationData(data.pagination || paginationData)
        }

        setIsLoading(false)
      }
    }

    fetchSpendings()

    return () => {
      ignor = true
    }
  }, [currentPage])

  return (
    <div className="flex flex-col gap-20">
      {isLoading && <div>Загрузка...</div>}
      {error && <div>Ошибка: {error}</div>}
      {!isLoading && !error && <SpendingsList items={spendingsData} />}
      <Pagination
        currentPage={currentPage}
        totalPages={paginationData.total_pages}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  )
}

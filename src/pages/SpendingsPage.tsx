import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import type { ISpendings } from '@/api/types/ISpendings'
import { Pagination } from '@/components/shared/pagination'
import { mapSpendings } from '@/components/spendings/spendings-card'
import { SpendingsList } from '@/components/spendings/spendings-list'
import { SpendingsSorting } from '@/components/spendings/spendings-sorting'
import { sortSpendings } from '@/components/spendings/spendings-sorting/utils/Sorting'
import { formatDate } from '@/utils/date-time'

const MOCK_DATA: ISpendings[] = Array.from({ length: 11 * 3 * 3 }).map(
  (_data, index) => ({
    id: index,
    name: `Оплата подписки ${index + 1}`,
    withdrawal_type: Math.round(Math.random()) ? 'repeated' : 'manual',
    withdrawal_date: `${String(index).padStart(2, '0')}.07.2020`,
    created_at: formatDate(Date.now()),
    updated_at: formatDate(Date.now()),
    cost: 1000.53
  })
)

function fetchSpendingsPaginated(
  data: ISpendings[],
  currentPage: number,
  itemsPerPage = 9
) {
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  return {
    data: data.slice(startIndex, endIndex),
    error: null,
    pagination: {
      totalPages: 11,
      perPage: itemsPerPage,
      page: currentPage
    }
  }
}

export function SpendingsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchParams, setSearchParams] = useSearchParams()

  const sortSlug = searchParams.get('slug') || null

  const sortedData = useMemo(() => {
    if (!sortSlug) {
      return MOCK_DATA
    }
    return sortSpendings(MOCK_DATA, sortSlug)
  }, [sortSlug])

  const paginatedSpendingsResponse = useMemo(
    () => fetchSpendingsPaginated(sortedData, currentPage),
    [sortedData, currentPage]
  )

  const spendingsData = useMemo(
    () => mapSpendings(paginatedSpendingsResponse.data),
    [paginatedSpendingsResponse.data]
  )

  const handleSortChange = (slug: string) => {
    setCurrentPage(1)
    setSearchParams({ slug: slug })
  }
  return (
    <div className="flex flex-col gap-5">
      <SpendingsSorting onSortChange={handleSortChange} />
      <div className="flex flex-col gap-20">
        <SpendingsList items={spendingsData} />
        <Pagination
          currentPage={currentPage}
          totalPages={paginatedSpendingsResponse.pagination.totalPages}
          onPageChange={page => setCurrentPage(page)}
        />
      </div>
    </div>
  )
}

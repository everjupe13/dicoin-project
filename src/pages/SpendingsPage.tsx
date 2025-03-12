import { useMemo, useState } from 'react'

import type { ISpendings } from '@/api/types/ISpendings'
import { Pagination } from '@/components/shared/pagination'
import { mapSpendings } from '@/components/spendings/spendings-card'
import { SpendingsList } from '@/components/spendings/spendings-list'
import { utilGetFormattedDate } from '@/shared/utils/get-formatted-date'

const MOCK_DATA: ISpendings[] = Array.from({ length: 11 * 3 * 3 }).map(
  (_data, index) => ({
    id: index,
    name: `Оплата подписки ${index + 1}`,
    withdrawal_type: Math.round(Math.random()) ? 'repeated' : 'manual',
    withdrawal_date: `${String(index).padStart(2, '0')}.07.2020`,
    created_at: utilGetFormattedDate(Date.now()),
    updated_at: utilGetFormattedDate(Date.now()),
    cost: 1000.53
  })
)

function fetchSpendingsPaginated(currentPage: number, itemsPerPage = 9) {
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  return {
    data: MOCK_DATA.slice(startIndex, endIndex),
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

  const paginatedSpendingsResponse = useMemo(
    () => fetchSpendingsPaginated(currentPage),
    [currentPage]
  )

  const spendingsData = useMemo(
    () => mapSpendings(paginatedSpendingsResponse.data),
    [paginatedSpendingsResponse.data]
  )
  return (
    <div className="flex flex-col gap-20">
      <SpendingsList items={spendingsData} />
      <Pagination
        currentPage={currentPage}
        totalPages={paginatedSpendingsResponse.pagination.totalPages}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  )
}

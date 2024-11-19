import { useState } from 'react'

import { ISpendings } from '@/api/types/ISpendings'
import { Pagination } from '@/components/shared/pagination'
import { mapSpendings } from '@/components/spendings/spendings-card'
import { SpendingsList } from '@/components/spendings/spendings-list'
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

function fetchSpendingsPaginated(currentPage, itemsPerPage, data) {
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return data.slice(startIndex, endIndex)
}

const SPENDINGS_DATA = mapSpendings(MOCK_DATA)
const ITEMS_PER_PAGE = 9
const INITIAL_CURRENT_PAGE = 1

export function SpendingsPage() {
  const [currentPage, setCurrentPage] = useState(INITIAL_CURRENT_PAGE)

  const paginateSpendings = fetchSpendingsPaginated(
    currentPage,
    ITEMS_PER_PAGE,
    SPENDINGS_DATA
  )
  return (
    <div className="flex flex-col gap-20">
      <SpendingsList items={paginateSpendings} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(SPENDINGS_DATA.length / ITEMS_PER_PAGE)}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  )
}

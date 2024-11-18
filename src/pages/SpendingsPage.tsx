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

export function SpendingsPage() {
  const spendingsData = mapSpendings(MOCK_DATA)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return (
    <div className="flex flex-col gap-20">
      <SpendingsList items={spendingsData.slice(startIndex, endIndex)} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(spendingsData.length / itemsPerPage)}
        siblingsCount={1}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  )
}

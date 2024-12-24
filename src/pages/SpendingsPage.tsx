import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import type { ISpendings } from '@/api/types/ISpendings'
import { Pagination } from '@/components/shared/pagination'
import { mapSpendings } from '@/components/spendings/spendings-card'
import { SpendingsList } from '@/components/spendings/spendings-list'
import { SpendingsSorting } from '@/components/spendings/spendings-sorting'
import { sortSpendings } from '@/components/spendings/spendings-sorting/utils/Sorting'
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

const MOCK_SORTING = [
  {
    slug: 'price',
    label: 'Стоимость',
    type: 'select',
    values: [
      {
        slug: 'price-ascending',
        label: 'По возрастанию списания'
      },
      {
        slug: 'price-descending',
        label: 'По убыванию списания'
      }
    ]
  },
  {
    slug: 'withdrawal-date',
    label: 'Дата списания',
    type: 'select',
    values: [
      {
        slug: 'withdrawal-date-ascending',
        label: 'По возрастанию даты'
      },
      {
        slug: 'withdrawal-date-descending',
        label: 'По убыванию даты'
      }
    ]
  }
]

function fetchSpendingsPaginated({
  currentPage = 1,
  itemsPerPage = 9,
  sorting: _sorting
}: {
  currentPage?: number
  itemsPerPage?: number
  sorting?: string | null
} = {}) {
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

const sorting = 'sorting'

export function SpendingsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchParams, setSearchParams] = useSearchParams()

  const sortSlug = searchParams.get(sorting) || null

  const paginatedSpendingsResponse = useMemo(
    () => fetchSpendingsPaginated({ currentPage, sorting: sortSlug }),
    [currentPage, sortSlug]
  )

  const spendingsData = useMemo(
    () => mapSpendings(paginatedSpendingsResponse.data),
    [paginatedSpendingsResponse.data]
  )

  const handleSortChange = (slug: string) => {
    setCurrentPage(1)
    setSearchParams(prev => ({ ...Object.fromEntries(prev), [sorting]: slug }))
  }
  return (
    <div className="flex flex-col gap-5">
      <SpendingsSorting
        sortingData={MOCK_SORTING}
        onSortChange={handleSortChange}
        currentSlug={sortSlug}
      />
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

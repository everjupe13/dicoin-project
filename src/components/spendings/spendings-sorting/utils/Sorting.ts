import type { ISpendings } from '@/api/types/ISpendings'

export function sortSpendings(
  spendings: ISpendings[],
  slug: string
): ISpendings[] {
  const sortMapping: Record<
    string,
    { key: keyof ISpendings; order: 'ascending' | 'descending' }
  > = {
    'price-ascending': { key: 'cost', order: 'ascending' },
    'price-descending': { key: 'cost', order: 'descending' },
    'withdrawal-date-ascending': { key: 'withdrawal_date', order: 'ascending' },
    'withdrawal-date-descending': {
      key: 'withdrawal_date',
      order: 'descending'
    }
  }

  const config = sortMapping[slug]

  if (!config) {
    return spendings
  }

  return [...spendings].sort((a, b) => {
    const aValue = a[config.key]
    const bValue = b[config.key]

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return config.order === 'ascending' ? aValue - bValue : bValue - aValue
    }

    if (config.key === 'withdrawal_date') {
      const aDate = new Date(aValue as string).getTime()
      const bDate = new Date(bValue as string).getTime()
      return config.order === 'ascending' ? aDate - bDate : bDate - aDate
    }

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return config.order === 'ascending'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue)
    }

    return 0
  })
}

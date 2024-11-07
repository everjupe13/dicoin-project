import { ISpendings } from '@/api/types/ISpendings'
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
  const spendingsData = mapSpendings(MOCK_DATA.slice(0, 6))
  return (
    <div>
      <SpendingsList items={spendingsData} />
    </div>
  )
}

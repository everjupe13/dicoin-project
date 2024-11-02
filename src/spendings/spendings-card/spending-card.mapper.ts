import { ISpendings } from '@/api/types/ISpendings'

import { SpendingsCardProps } from './spendings-card'

export function mapSpendingsToProps(items: ISpendings[]): SpendingsCardProps[] {
  return items.map(item => ({
    id: item.id,
    name: item.name,
    withdrawalType: item.withdrawal_type,
    withdrawalDate: item.withdrawal_date,
    createdAt: item.created_at,
    updatedAt: item.updated_at,
    cost: item.cost
  }))
}

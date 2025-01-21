import { ISpendings } from '@/api/types/ISpendings'

import { SpendingsCardProps } from '../ui/spendings-card'

export function mapSpendings(
  items?: Partial<ISpendings>[]
): SpendingsCardProps[] {
  return (items || []).map(item => ({
    id: item.id!,
    name: item.name!,
    withdrawalType: item.withdrawal_type!,
    withdrawalDate: item.withdrawal_date!,
    cost: item.cost!
  }))
}

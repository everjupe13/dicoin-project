import { ISpendings } from '../../api/types/ISpendings'
import { SpendingCard } from '../spendings-card/spendings-card'

export function SpendingList({ items }: { items: ISpendings[] }) {
  return (
    <div>
      {(items as ISpendings[]).map((item: ISpendings) => (
        <SpendingCard
          key={item.id}
          id={item.id}
          name={item.name}
          withdrawalType={item.withdrawal_type}
          withdrawalDate={item.withdrawal_date}
          createdAt={item.created_at}
          updatedAt={item.updated_at}
          cost={item.cost}
        />
      ))}
    </div>
  )
}

import { SpendingsCard, type SpendingsCardProps } from '../../spendings-card'

export interface SpendingsListProps {
  items?: SpendingsCardProps[]
}

export function SpendingsList({ items }: SpendingsListProps) {
  return (
    <div className="grid grid-cols-3 gap-40">
      {items?.map(item => <SpendingsCard key={item.id} {...item} />)}
    </div>
  )
}

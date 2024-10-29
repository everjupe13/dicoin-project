import { SpendingList } from '@/spendings/spendings-list/spendings-list'

export function SpendingsPage() {
  return (
    <div
      style={{
        display: 'grid',
        gap: '40px',
        gridTemplateColumns: 'repeat(auto-fill, minmax(339px, 1fr))'
      }}
    >
      <SpendingList
        items={[
          {
            id: 5,
            name: 'Оплата подписки',
            withdrawal_type: 'repeated',
            withdrawal_date: '07.07.2020',
            created_at: '',
            updated_at: '',
            cost: 1000.53
          }
        ]}
      />
      <SpendingList
        items={[
          {
            id: 5,
            name: 'Оплата подписки',
            withdrawal_type: 'repeated',
            withdrawal_date: '07.07.2020',
            created_at: '',
            updated_at: '',
            cost: 1000.53
          }
        ]}
      />
      <SpendingList
        items={[
          {
            id: 5,
            name: 'Оплата подписки',
            withdrawal_type: 'repeated',
            withdrawal_date: '07.07.2020',
            created_at: '',
            updated_at: '',
            cost: 1000.53
          }
        ]}
      />
      <SpendingList
        items={[
          {
            id: 5,
            name: 'Оплата подписки',
            withdrawal_type: 'repeated',
            withdrawal_date: '07.07.2020',
            created_at: '',
            updated_at: '',
            cost: 1000.53
          }
        ]}
      />
      <SpendingList
        items={[
          {
            id: 5,
            name: 'Оплата подписки',
            withdrawal_type: 'repeated',
            withdrawal_date: '07.07.2020',
            created_at: '',
            updated_at: '',
            cost: 1000.53
          }
        ]}
      />
    </div>
  )
}

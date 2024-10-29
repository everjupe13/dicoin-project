export interface ISpendings {
  id: number
  name: string
  withdrawal_type: 'repeated' | 'manual'
  withdrawal_date: string | null
  created_at: string
  updated_at: string
  cost: number
}

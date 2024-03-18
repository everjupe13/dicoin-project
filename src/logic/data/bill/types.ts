import { IBillStatus } from '@/logic/domain/entity/bill/value-object/bill-status'

export interface IBillApi {
  id: string
  name: string
  amount: number
  created_at: string
  updated_at: string
  status: IBillStatus
}

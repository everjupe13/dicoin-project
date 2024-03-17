import { Bill } from '@/logic/core/entities/bill/bill'

export interface BillRepository {
  getBillsList(): Promise<Bill[]>
}

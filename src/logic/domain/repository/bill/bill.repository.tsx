import { Bill } from '@/logic/domain/entity/bill/bill'

export interface BillRepository {
  getBillsList(): Promise<Bill[]>
}

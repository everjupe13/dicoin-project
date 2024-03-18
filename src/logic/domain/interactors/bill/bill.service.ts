import { Bill } from '@/logic/domain/entity/bill/bill'
import { BillRepository } from '@/logic/domain/repository/bill/bill.repository'

export class BillService {
  constructor(readonly billsRepository: BillRepository) {}

  async getBillsList(): Promise<Bill[]> {
    return await this.billsRepository.getBillsList()
  }
}

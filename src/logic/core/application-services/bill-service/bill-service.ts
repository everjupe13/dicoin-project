import { Bill } from '@/logic/core/entities/bill/bill'
import { BillRepository } from '@/logic/core/repository/bill-repository/bill-repository'

export class BillService {
  constructor(readonly billsRepository: BillRepository) {}

  async getBillsList(): Promise<Bill[]> {
    return await this.billsRepository.getBillsList()
  }
}

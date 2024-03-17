import { Bill } from '@/logic/core/entities/bill/bill'
import { BillRepository } from '@/logic/core/repository/bill-repository/bill-repository'
import { BillEntity } from '@/logic/infrastructure/domain/entities/bill/bill'

export class BillService {
  constructor(readonly billsRepository: BillRepository) {}

  getBillsList(domainBills: BillEntity[]): Bill[] {
    return this.billsRepository.getBillsList(domainBills)
  }
}

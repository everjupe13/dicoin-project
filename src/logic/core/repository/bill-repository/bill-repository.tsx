import { Bill } from '@/logic/core/entities/bill/bill'
import { BillEntity } from '@/logic/infrastructure/domain/entities/bill/bill'

export interface BillRepository {
  getBillsList(domainBills: BillEntity[]): Bill[]
}

export class BillRepositoryImplementation implements BillRepository {
  getBillsList(domainBills: BillEntity[]): Bill[] {
    return domainBills.map(
      domainBill =>
        new Bill(
          domainBill.id,
          domainBill.name,
          domainBill.amount,
          domainBill.created_at,
          domainBill.updated_at
        )
    )
  }
}

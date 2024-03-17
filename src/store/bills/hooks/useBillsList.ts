import { useQuery } from '@tanstack/react-query'

import { BillService } from '@/logic/core/application-services/bill-service/bill-service'
import { HttpBillController } from '@/logic/infrastructure/controllers/bill/http-bill-controller'
import { BillRepositoryImplementation } from '@/logic/infrastructure/db/repository/bill-repository/bill-repository'

export const RQUERY_BILLS_LIST_KEY = 'bills-list'

const httpBillsService = new HttpBillController(
  new BillService(new BillRepositoryImplementation())
)

export const useBillsList = () => {
  return useQuery({
    queryKey: [RQUERY_BILLS_LIST_KEY],
    queryFn: () => httpBillsService.getBillsList()
    // select: bills => bills.map(bill => bill.toObject())
  })
}

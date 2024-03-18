import { useQuery } from '@tanstack/react-query'

import { HttpBillRepository } from '@/logic/data/bill/bill.repository'
import { BillService } from '@/logic/domain/interactors/bill/bill.service'

export const RQUERY_BILLS_LIST_KEY = 'bills-list'

const httpBillsService = new BillService(new HttpBillRepository())

export const useBillsList = () => {
  return useQuery({
    queryKey: [RQUERY_BILLS_LIST_KEY],
    queryFn: () => httpBillsService.getBillsList()
    // select: bills => bills.map(bill => bill.toObject())
  })
}

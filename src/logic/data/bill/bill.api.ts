import { HttpStatusCode } from 'axios'

import { ApiResponse } from '@/app/types'
import { HttpRepository } from '@/logic/data/base/http.repository'
import { Bill } from '@/logic/domain/entity/bill/bill'
import { BillRepository } from '@/logic/domain/repository/bill/bill.repository'

import { BillMapper } from './bill.mapper'
import { IBillApi } from './types'

export class HttpBillRepository
  extends HttpRepository
  implements BillRepository
{
  constructor() {
    super()
  }

  async getBillsList(): Promise<Bill[]> {
    const { data, status } = await this.axios.get<ApiResponse<IBillApi[]>>(
      this.getPath('/api/v1/data/bills/bills.json')
    )

    if (status === HttpStatusCode.Ok && data.data) {
      return data.data.map(bill => BillMapper.toDomain(bill))
    }

    throw new Error("can' fetch bills")
  }
}

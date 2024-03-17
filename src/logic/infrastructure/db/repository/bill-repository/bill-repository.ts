import { HttpStatusCode } from 'axios'

import { ApiResponse } from '@/app/types'
import { BillRepository } from '@/logic/core/repository/bill-repository/bill-repository'
import { HttpBaseController } from '@/logic/infrastructure/controllers/base/http-base-controller'
import { BillEntity } from '@/logic/infrastructure/db/entities/bill/bill'
import { BillMapper } from '@/logic/infrastructure/db/mappers/bill/bill-mapper'

export class BillRepositoryImplementation
  extends HttpBaseController
  implements BillRepository
{
  constructor() {
    super()
  }

  async getBillsList() {
    const { data, status } = await this.axios.get<ApiResponse<BillEntity[]>>(
      this.getPath('/api/v1/data/bills/bills.json')
    )

    if (status === HttpStatusCode.Ok && data.data) {
      return data.data.map(bill => BillMapper.toDomain(bill))
    }

    throw new Error("can' fetch bills")
  }
}

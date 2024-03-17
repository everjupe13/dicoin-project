import { HttpStatusCode } from 'axios'

import { ApiResponse } from '@/app/types'
import { BillService } from '@/logic/core/application-services/bill-service/bill-service'
import { HttpBaseController } from '@/logic/infrastructure/controllers/http-base-controller/http-base-controller'
import { BillEntity } from '@/logic/infrastructure/domain/entities/bill/bill'

export class HttpBillController extends HttpBaseController {
  constructor(readonly billsService: BillService) {
    super()
  }

  async getBillsList() {
    const { data, status } = await this.axios.get<ApiResponse<BillEntity[]>>(
      this.getPath('/api/v1/data/bills/bills.json')
    )

    if (status === HttpStatusCode.Ok && data.data) {
      return this.billsService.getBillsList(data.data)
    }

    return data.data
  }
}

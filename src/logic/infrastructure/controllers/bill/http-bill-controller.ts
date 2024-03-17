// import { HttpStatusCode } from 'axios'

// import { ApiResponse } from '@/app/types'
import { BillService } from '@/logic/core/application-services/bill-service/bill-service'
import { HttpBaseController } from '@/logic/infrastructure/controllers/base/http-base-controller'

export class HttpBillController extends HttpBaseController {
  constructor(readonly billsService: BillService) {
    super()
  }

  async getBillsList() {
    return await this.billsService.getBillsList()
  }
}

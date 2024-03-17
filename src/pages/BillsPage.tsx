import { FC, useEffect } from 'react'

import { BillService } from '@/logic/core/application-services/bill-service/bill-service'
import { BillRepositoryImplementation } from '@/logic/core/repository/bill-repository/bill-repository'
import { HttpBillController } from '@/logic/infrastructure/controllers/http-bill-controller/http-bill-controller'

const httpBillsService = new HttpBillController(
  new BillService(new BillRepositoryImplementation())
)

export const BillsPage: FC = () => {
  useEffect(() => {
    const f = async () => {
      const asd = await httpBillsService.getBillsList()
      console.log(asd)
    }
    f()
  }, [])

  return (
    <>
      <p>heeeelllllo bitch</p>
    </>
  )
}

import { FC } from 'react'

import { Bill } from '@/logic/domain/entity/bill/bill'

type Props = {
  bill: Bill
}

const BillTicket: FC<Props> = ({ bill }) => {
  return (
    <>
      <div>
        <p>{bill.name}</p>
        <p>{bill.amount}</p>
        <p>{bill.updatedAt.toISOString()}</p>
        <p>{bill.status}</p>
      </div>
    </>
  )
}

export default BillTicket

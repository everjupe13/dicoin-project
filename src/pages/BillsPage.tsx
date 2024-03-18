import { FC, useEffect } from 'react'

import { BillTicket } from '@/components/entities/bills'
import { useBillsList } from '@/logic/presentation/adapters/bill/useBillsList'

export const BillsPage: FC = () => {
  const { data, isLoading } = useBillsList()

  useEffect(() => {
    if (!isLoading) {
      console.log(data)
    }
  }, [data, isLoading])

  return (
    <div className="grid grid-cols-3 gap-20">
      {!isLoading && data && (
        <>
          {data.map(bill => (
            <BillTicket key={bill.id} bill={bill} />
          ))}
        </>
      )}
    </div>
  )
}

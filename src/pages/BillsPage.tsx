import { FC, useEffect } from 'react'

import { useBillsList } from '@/store/bills'

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
            <div key={bill.id}>
              <p>{bill.name}</p>
              <p>{bill.amount}</p>
              <p>{bill.updatedAt}</p>
            </div>
          ))}
        </>
      )}
    </div>
  )
}

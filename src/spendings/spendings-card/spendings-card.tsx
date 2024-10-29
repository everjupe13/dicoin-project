import { Badge } from '@/components/badge/Badge'

export interface SpendingsCardProps {
  id: number
  name: string
  withdrawalType: 'repeated' | 'manual'
  withdrawalDate: string | null
  createdAt: string
  updatedAt: string
  cost: number
}

export function SpendingCard({
  id,
  name,
  withdrawalType,
  withdrawalDate,
  createdAt,
  updatedAt,
  cost
}: SpendingsCardProps) {
  return (
    <div
      id={id.toString()}
      className="w-[339px] rounded-[5px] bg-[#3d3d3d] px-[20px] py-[25px] "
    >
      <div>
        <div>
          <p className="text-[18px] font-[500] font-[var(--second-family)] ">
            {name}
          </p>
        </div>
        <div className="mt-[15px] flex flex-col gap-[5px] ">
          {withdrawalType === 'repeated' && (
            <Badge text="повторяющийся платеж" />
          )}
          {withdrawalDate && <Badge text={withdrawalDate} />}
        </div>
      </div>

      <div className="mt-[20px] flex items-center justify-between border-t-[1px] border-solid border-[#696969] py-[5px] ">
        <p className="text-[16px] font-[500] font-[var(--second-family)] ">
          Сумма
        </p>
        <p className="text-[22px] font-[700] font-[var(--second-family)] ">
          {cost} ₽
        </p>
      </div>
    </div>
  )
}

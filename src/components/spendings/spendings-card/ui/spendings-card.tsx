import { Badge } from '@/components/shared/badge'
import { formatPrice } from '@/utils/price'
import { isDefined } from '@/utils/validate'

export interface SpendingsCardProps {
  id: number
  name: string
  withdrawalType: 'repeated' | 'manual'
  withdrawalDate: string | null
  cost: number
}

export function SpendingsCard({
  name,
  withdrawalType,
  withdrawalDate,
  cost
}: SpendingsCardProps) {
  const mapWithdrawalTypeBadge = {
    repeated: <Badge text="повторяющийся платеж" />,
    manual: <></>
  }

  return (
    <article className="flex min-h-[219px] max-w-[700px] items-stretch rounded-5 bg-[#3d3d3d] px-20 py-25">
      <div className="flex w-full flex-col justify-between">
        <div className="mb-20">
          <div className="mb-15">
            <h3 className="font-inter font-medium text-18">{name}</h3>
          </div>
          <div className="flex flex-col gap-5">
            {mapWithdrawalTypeBadge[withdrawalType]}
            {withdrawalDate && <Badge text={withdrawalDate} />}
          </div>
        </div>

        {isDefined(cost) && (
          <div className="flex items-center justify-between border-t border-[#696969] py-5">
            <p className="font-inter font-medium text-16">Сумма</p>
            <p className="font-inter font-bold text-22">{formatPrice(cost)}</p>
          </div>
        )}
      </div>
    </article>
  )
}

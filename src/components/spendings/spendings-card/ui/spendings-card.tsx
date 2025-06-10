import { Badge } from '@/components/shared/badge'
import { utilGetFormattedPrice } from '@/shared/utils/get-formatted-price'
import { utilIsDefined } from '@/shared/utils/validate'

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
    <article className="rounded-5 py-25 flex min-h-[219px] max-w-[700px] items-stretch bg-[#3d3d3d] px-20">
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

        {utilIsDefined(cost) && (
          <div className="flex items-center justify-between border-t border-[#696969] py-5">
            <p className="font-inter font-medium text-16">Сумма</p>
            <p className="font-inter font-bold text-22">
              {utilGetFormattedPrice(cost)}
            </p>
          </div>
        )}
      </div>
    </article>
  )
}

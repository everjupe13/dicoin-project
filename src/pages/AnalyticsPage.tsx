import { FC } from 'react'

import { Pagination } from '@/components/shared/pagination'

const DATA = {
  numPage: '2',
  allPages: '11'
}

const getCurrencySymbol = (
  locale: string | Intl.Locale,
  currency: Intl.NumberFormatOptions['currency']
) =>
  (0)
    .toLocaleString(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })
    .replaceAll(/\d/g, '')
    .trim()

export const AnalyticsPage: FC = () => {
  return (
    <div>
      <Pagination numPage={DATA.numPage} allPages={DATA.allPages} />
      <div className="mb-20">
        <h1>Аналитика</h1>
      </div>
      <div className="w-[400px] bg-black p-16">
        <h3 className="font-medium text-18">Доходы</h3>
        <div>
          <div className="grid grid-cols-2">
            <div>Темка</div>
            <div>{`200 ${getCurrencySymbol('ru-RU', 'RUB')}`}</div>
          </div>
          <div className="grid grid-cols-2">
            <div>Темка</div>
            <div>{`8 000 ${getCurrencySymbol('ru-RU', 'RUB')}`}</div>
          </div>
          <div className="grid grid-cols-2">
            <div>Зарплата</div>
            <div>{`300 000 ${getCurrencySymbol('ru-RU', 'RUB')}`}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsPage

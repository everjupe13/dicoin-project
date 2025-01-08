import { Select } from '../../../shared/select'

const DATA = [
  {
    slug: 'price',
    label: 'Стоимость',
    type: 'select',
    values: [
      {
        slug: 'price-ascending',
        label: 'По возрастанию списания'
      },
      {
        slug: 'price-descending',
        label: 'По убыванию списания'
      }
    ]
  },
  {
    slug: 'withdrawal-date',
    label: 'Дата списания',
    type: 'select',
    values: [
      {
        slug: 'withdrawal-date-ascending',
        label: 'По возрастанию даты'
      },
      {
        slug: 'withdrawal-date-descending',
        label: 'По убыванию даты'
      }
    ]
  }
]
interface SpendingsSortingProps {
  onSortChange?: (slug: string) => void
}

export function SpendingsSorting({ onSortChange }: SpendingsSortingProps) {
  return (
    <div>
      <Select
        options={DATA.flatMap(data =>
          data.values.map(value => ({
            label: value.label,
            value: value.slug
          }))
        )}
        onChange={value => {
          onSortChange?.(value.value)
        }}
      />
    </div>
  )
}

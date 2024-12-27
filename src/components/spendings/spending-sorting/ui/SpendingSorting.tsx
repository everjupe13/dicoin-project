import { Select } from '../../../shared/select'

export function SpendingSorting({
  onSortChange
}: {
  onSortChange: (slug: string) => void
}) {
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

  return (
    <div>
      <Select
        options={DATA.flatMap(data =>
          data.values.map(value => ({
            label: value.label,
            value: value.slug
          }))
        )}
        name="MyName"
        onChange={value => {
          onSortChange(value.value)
        }}
      />
    </div>
  )
}

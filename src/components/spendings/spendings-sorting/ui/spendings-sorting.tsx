import { Select } from '../../../shared/select'

interface MockSortingProps {
  slug: string
  label: string
  type: string
  values: {
    slug: string
    label: string
  }[]
}

interface SpendingsSortingProps {
  sortingData: MockSortingProps[]
  onSortChange?: (slug: string) => void
}

export function SpendingsSorting({
  sortingData,
  onSortChange
}: SpendingsSortingProps) {
  return (
    <div>
      <Select
        options={sortingData.flatMap(data =>
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

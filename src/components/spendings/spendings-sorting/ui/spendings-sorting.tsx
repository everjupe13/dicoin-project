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
  currentSlug?: string | null
}

export function SpendingsSorting({
  sortingData,
  onSortChange,
  currentSlug
}: SpendingsSortingProps) {
  const options = sortingData.flatMap(data =>
    data.values.map(value => ({
      label: value.label,
      value: value.slug
    }))
  )

  const selectedOption =
    options.find(option => option.value === currentSlug) || undefined
  return (
    <div>
      <Select
        options={options}
        selected={selectedOption}
        onChange={value => {
          onSortChange?.(value.value)
        }}
      />
    </div>
  )
}

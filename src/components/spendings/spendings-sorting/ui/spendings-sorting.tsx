import { ISorting } from '@/api/types/ISorting'
import { Select } from '@/components/shared/select'

interface SpendingsSortingProps {
  sortingData: ISorting[]
  onSortChange?: (slug: string) => void
  currentSlug?: string | null
}

export function SpendingsSorting({
  sortingData,
  onSortChange,
  currentSlug
}: SpendingsSortingProps) {
  if (sortingData.length === 0) {
    return null
  }

  const options = sortingData.flatMap(data =>
    data.values.map(value => ({
      label: value.label,
      value: value.slug
    }))
  )

  if (options.length === 0) {
    return null
  }

  const selectedOption = currentSlug
    ? options.find(option => option.value === currentSlug)
    : undefined
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

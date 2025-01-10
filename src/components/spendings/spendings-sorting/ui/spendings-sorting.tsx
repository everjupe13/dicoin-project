import { SortingProps } from '@/api/types/SortingProps'
import { Select } from '@/components/shared/select'

interface SpendingsSortingProps {
  sortingData: SortingProps[]
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

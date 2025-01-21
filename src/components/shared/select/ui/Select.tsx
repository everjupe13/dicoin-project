import { type SelectOption } from '../types'

export interface SelectProps {
  options: SelectOption[]
  selected?: SelectOption | SelectOption[]
  name?: string
  multiple?: boolean
  disabled?: boolean
  autocomplete?: string

  onChange: (value: SelectOption) => void
  onFocus?: () => void
  onBlur?: () => void
}

export function Select({
  options,
  selected,
  name,
  disabled,
  autocomplete,
  onChange
}: SelectProps) {
  return (
    <div className="w-[250px] rounded-6 bg-[#3d3d3d] p-8">
      <select
        className="w-full bg-[#3d3d3d]"
        name={name}
        disabled={disabled}
        autoComplete={autocomplete}
        value={Array.isArray(selected) ? undefined : selected?.value}
        onChange={e => {
          const currentOption = options.find(
            option => option.value === e.target.value
          )

          if (currentOption !== undefined) {
            onChange(currentOption)
          }
        }}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

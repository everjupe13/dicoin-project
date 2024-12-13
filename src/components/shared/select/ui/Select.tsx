import { type SelectOption } from '../types'

export interface SelectProps {
  options: SelectOption[]
  selected?: SelectOption[]
  name: string
  multiple?: boolean
  disabled?: boolean
  autocomplete?: boolean

  onChange: (value: SelectOption | SelectOption[]) => void
  onFocus?: () => void
  onBlur?: () => void
}

export function Select({ options, selected, name, onChange }: SelectProps) {
  return (
    <div className="w-[250px] rounded-6 bg-[#3d3d3d] p-8">
      <select
        className="w-full bg-[#3d3d3d]"
        name={name}
        onChange={e => {
          options.map(option => {
            if (option.value === e.target.value) {
              onChange(option)
            }
          })
        }}
      >
        {options.map(option => (
          <option
            selected={selected?.some(select => select.value === option.value)}
            key={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

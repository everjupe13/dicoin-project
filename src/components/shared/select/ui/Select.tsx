import { SelectOption } from '@/app/types'

export interface SelectProps {
  options: SelectOption[]
  name: string
  onChange: (value: string | string[]) => void // тут хз как использовать тайп SelectOption он же объект и как от
  onFocus?: () => void
  onBlur?: () => void
  multiple?: boolean
  disabled?: boolean
  autocomplete?: boolean
}

export function Select({ options, name, onChange }: SelectProps) {
  return (
    <div className="w-[250px] rounded-6 bg-[#3d3d3d] p-8">
      <select
        className="w-full bg-[#3d3d3d] outline-none"
        name={name}
        onChange={e => onChange(e.target.value)}
      >
        {options.map(option => (
          <option key={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  )
}

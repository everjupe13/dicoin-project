export interface SelectProps {
  options: { label: string; value: string }[]
  name: string
  onChange: (value: string) => void
}

export function Select({ options, name, onChange }: SelectProps) {
  return (
    <div className="w-[250px] rounded-6 bg-[#3d3d3d] p-8">
      <select
        className="w-full bg-[#3d3d3d] outline-none"
        name={name} // зачем?
        onChange={e => onChange(e.target.value)}
      >
        {options.map(option => (
          <option key={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  )
}

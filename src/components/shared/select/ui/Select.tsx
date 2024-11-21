interface SelectProps {
  values: string[]
}

export function Select({ values }: SelectProps): JSX.Element {
  return (
    <div className="w-[250px] rounded-6 bg-[#3d3d3d] p-8">
      <select className="w-full bg-[#3d3d3d] outline-none">
        {values.map((value, index) => (
          <option key={index}>{value}</option>
        ))}
      </select>
    </div>
  )
}

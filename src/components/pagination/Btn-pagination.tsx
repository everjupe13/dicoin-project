interface BtnPaginationProps {
  text: string
  color?: string
  onClick: () => void
}
export function BtnPagination({ text, color, onClick }: BtnPaginationProps) {
  return (
    <div
      className={`flex h-30 w-29 items-center justify-center rounded-[100px] border border-[#646363] bg-[#3d3d3d] font-[500] text-white text-14 ${color} `}
      onClick={onClick}
    >
      {text}
    </div>
  )
}

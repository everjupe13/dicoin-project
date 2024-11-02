import { FC, ReactNode } from 'react'

type BadgeType = {
  text?: string
  children?: ReactNode
}

export const Badge: FC<BadgeType> = ({ text, children }) => {
  const content = text || children
  if (!content) {
    return null
  }
  return (
    <div className="flex max-w-max self-start rounded-[6px] bg-[#1e1e1e] px-[10px] py-[7px] ">
      <p className="text-[10px] font-[500] font-[var(--second-family)] ">
        {content}
      </p>
    </div>
  )
}

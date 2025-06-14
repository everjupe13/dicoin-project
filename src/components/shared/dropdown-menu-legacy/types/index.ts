import { ReactNode } from 'react'

export interface DropdownMenuItemProps {
  label?: string | ReactNode
  icon?: ReactNode
  link?: string
  onClick?: () => void
}

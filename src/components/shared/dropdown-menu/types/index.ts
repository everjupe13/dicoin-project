import { ReactNode } from 'react'

export interface DropdownMenuItemProps {
  label?: string | ReactNode
  icon?: ReactNode
  onClick?: () => void
}

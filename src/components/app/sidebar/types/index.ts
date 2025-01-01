import { ReactNode } from 'react'

export interface SidebarItem {
  label: string
  icon?: ReactNode
  link?: string
  onClick?: () => void
}

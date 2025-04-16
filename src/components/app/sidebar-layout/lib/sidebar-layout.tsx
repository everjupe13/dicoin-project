import { ReactNode, useState } from 'react'

import { NavbarItem } from '@/components/app/navbar'

import { MobileSidebar } from '../ui/mobile-sidebar'
import { OpenMenuIcon } from '../ui/open-menu-icon'

export interface SidebarLayoutProps {
  sidebar: ReactNode
  navbar: ReactNode
  children?: ReactNode
}

export function SidebarLayout({
  sidebar,
  navbar,
  children
}: SidebarLayoutProps) {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className="relative isolate flex min-h-svh w-full bg-zinc-100 [--aside-left-column-width:250px] md:flex-col md:bg-white dark:bg-zinc-950 dark:md:bg-zinc-900">
      {/* Sidebar on desktop */}
      <div className="fixed inset-y-0 left-0 w-[var(--aside-left-column-width,250px)] md:hidden">
        {sidebar}
      </div>

      {/* Sidebar on mobile */}
      <MobileSidebar open={showSidebar} close={() => setShowSidebar(false)}>
        {sidebar}
      </MobileSidebar>

      {/* Navbar on mobile */}
      <header className="hidden items-center px-16 md:flex">
        <div className="py-10">
          <NavbarItem
            onClick={() => setShowSidebar(true)}
            aria-label="Open navigation"
          >
            <OpenMenuIcon />
          </NavbarItem>
        </div>
        <div className="min-w-0 flex-1">{navbar}</div>
      </header>

      {/* Content */}
      <main className="flex min-w-0 flex-1 flex-col pb-8 pl-[var(--aside-left-column-width,250px)] pr-8 pt-8 md:min-w-[none] md:pl-0 md:pr-0 md:pt-0">
        <div className="grow rounded-8 bg-white p-40 shadow-sm ring-1 ring-zinc-950/5 md:rounded-0 md:bg-transparent md:p-24 md:shadow-none md:ring-0 dark:bg-zinc-900 dark:ring-white/10 dark:md:bg-transparent">
          <div className="mx-auto max-w-[1152px]">{children}</div>
        </div>
      </main>
    </div>
  )
}

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
    <div className="max-lg:flex-col relative isolate flex min-h-svh w-full bg-white lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950">
      {/* Sidebar on desktop */}
      <div className="max-lg:hidden fixed inset-y-0 left-0 w-64">{sidebar}</div>

      {/* Sidebar on mobile */}
      <MobileSidebar open={showSidebar} close={() => setShowSidebar(false)}>
        {sidebar}
      </MobileSidebar>

      {/* Navbar on mobile */}
      <header className="flex items-center px-4 lg:hidden">
        <div className="py-2.5">
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
      <main className="flex flex-1 flex-col pb-2 lg:min-w-0 lg:pl-64 lg:pr-2 lg:pt-2">
        <div className="lg:rounded-lg lg:shadow-xs grow p-6 lg:bg-white lg:p-10 lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10">
          <div className="mx-auto max-w-6xl">{children}</div>
        </div>
      </main>
    </div>
  )
}

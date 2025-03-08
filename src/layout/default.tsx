import { Outlet } from 'react-router-dom'

import { PageSidebar } from '@/components/app/page-sidebar'
import { Navbar } from '@/components/shared/navbar'
import { SidebarLayout } from '@/components/shared/sidebar-layout'

export function DefaultLayout() {
  return (
    <>
      <SidebarLayout sidebar={<PageSidebar />} navbar={<Navbar></Navbar>}>
        <Outlet />
      </SidebarLayout>
    </>
  )
}

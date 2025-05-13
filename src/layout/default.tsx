import { Outlet } from 'react-router-dom'

import { Navbar } from '@/components/app/navbar'
import { PageSidebar } from '@/components/app/page-sidebar'
import { SidebarLayout } from '@/components/app/sidebar-layout'

export function DefaultLayout() {
  return (
    <>
      <SidebarLayout sidebar={<PageSidebar />} navbar={<Navbar></Navbar>}>
        <Outlet />
      </SidebarLayout>
    </>
  )
}

import { Outlet } from 'react-router-dom'

import { Header } from '@/components/app/header'
import { Sidebar } from '@/components/app/sidebar'

export function DefaultLayout() {
  return (
    <>
      <div className="flex flex-1 flex-col">
        <Header className="flex-shrink-0" />

        <main className="flex flex-grow">
          <Sidebar className="sticky top-50 h-[calc(100dvh-50px)] w-[190px] flex-grow-0" />

          <div className="flex-grow px-30 py-20">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  )
}

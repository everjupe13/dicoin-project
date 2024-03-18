import { FC } from 'react'

import { Logo } from '@/components/shared/logo'

import SidebarNavList from './SidebarNavList'

const Sidebar: FC = () => {
  return (
    <div className="fixed bottom-0 left-0 top-0 z-[100] flex w-[240px] p-20">
      <div className="w-full rounded-12 bg-[#1D232C] p-16 pt-20">
        <div className="mb-25 flex items-center justify-center px-23">
          <Logo />
        </div>
        <SidebarNavList />
      </div>
    </div>
  )
}

export default Sidebar

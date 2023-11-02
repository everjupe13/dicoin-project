import { FC, ReactNode } from 'react'

// import { AppFooter } from '@/components/widgets/AppFooter/AppFooter'
import { AppHeader } from '@/components/widgets/AppHeader/AppHeader'

interface ILayoutProps {
  children?: ReactNode
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      {/* <AppHeader /> */}
      <div className="relative">
        <nav className="fixed bottom-0 left-0 top-0 z-[100] flex w-[240px] p-20">
          <div className="w-full rounded-12 bg-[#1D232C]"></div>
        </nav>
        <nav className="fixed bottom-0 left-[240px] right-0 top-0 z-[100] flex h-[100px] p-20 pb-0 pl-0">
          <AppHeader></AppHeader>
        </nav>
        <main className="relatvie main z-[1] ml-[240px] mt-[100px]">
          {children}
        </main>
      </div>
      {/* <AppFooter /> */}
    </>
  )
}

export { Layout }

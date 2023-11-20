import { FC, ReactElement } from 'react'
import { Outlet } from 'react-router-dom'

import { Footer } from '@/components/widgets/footer'
import { Header } from '@/components/widgets/header'

type Props = {
  children?: string | ReactElement | JSX.Element | JSX.Element[]
}

const DefaultLayout: FC<Props> = () => {
  return (
    <>
      <div className="relative">
        <nav className="fixed bottom-0 left-0 top-0 z-[100] flex w-[240px] p-20">
          <div className="w-full rounded-12 bg-[#1D232C]"></div>
        </nav>
        <nav className="fixed bottom-0 left-[240px] right-0 top-0 z-[100] flex h-[100px] p-20 pb-0 pl-0">
          <Header></Header>
        </nav>
        <main className="relatvie main z-[1] ml-[240px] mt-[100px]">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  )
}

export { DefaultLayout }

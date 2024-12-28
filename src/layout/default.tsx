import { FC, ReactElement } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '@/components/app/header'
import { Footer } from '@/components/widgets/footer'
// import { Sidebar } from '@/components/widgets/sidebar'

type Props = {
  children?: string | ReactElement | JSX.Element | JSX.Element[]
}

const DefaultLayout: FC<Props> = () => {
  return (
    <>
      <div className="relative">
        <Header />

        {/* <Sidebar /> */}
        <main className="main relative z-[1] ml-[240px] mt-[100px] w-[calc(100%-240px)] pb-20 pl-0 pr-20 pt-35">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  )
}

export { DefaultLayout }

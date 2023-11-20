import { FC, ReactElement } from 'react'
import { Outlet } from 'react-router-dom'

type Props = {
  children?: string | ReactElement | JSX.Element | JSX.Element[]
}

const AuthLayout: FC<Props> = () => {
  return (
    <>
      <main className="relatvie main z-[1] ml-[240px] mt-[100px]">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  )
}

export { AuthLayout }

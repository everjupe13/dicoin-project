import { FC, ReactElement } from 'react'

type Props = {
  children?: string | ReactElement | JSX.Element | JSX.Element[]
}

const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <main className="relatvie main z-[1] ml-[240px] mt-[100px]">
        <div className="container">{children}</div>
      </main>
    </>
  )
}

export { AuthLayout }

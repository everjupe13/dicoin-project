import { FC, ReactNode } from 'react'

import AuthContextProvider from './AuthContextProvider'

type Props = {
  children?: ReactNode
}

const AuhtContainer: FC<Props> = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>
}

export default AuhtContainer

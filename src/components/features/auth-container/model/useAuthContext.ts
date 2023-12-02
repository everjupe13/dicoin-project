import { useContext } from 'react'

import { AuthContext } from './context'

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('only use context as descendant')
  }

  return context
}

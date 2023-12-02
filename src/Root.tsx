import { FC } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

import { appTitle } from '@/app/core'

import { AuthContainer } from './components/features/auth-container'

export const Root: FC = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{appTitle('')}</title>
        </Helmet>
      </HelmetProvider>
      <AuthContainer>
        <Outlet />
      </AuthContainer>
    </>
  )
}

import { FC } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

import { appTitle } from '@/app/core'
import { ProvidersContainer } from '@/providers/providers-container'

import { AuthContainer } from './components/features/auth-container'

export const Root: FC = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{appTitle('')}</title>
        </Helmet>
      </HelmetProvider>
      <ProvidersContainer>
        <AuthContainer>
          <Outlet />
        </AuthContainer>
      </ProvidersContainer>
    </>
  )
}

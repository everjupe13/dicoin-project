import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

import { ProvidersContainer } from '@/providers/providers-container'
import { utilGetAppTitle } from '@/shared/utils/get-app-title'

import { ProvidersToast } from './providers/toast-provider'

export function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{utilGetAppTitle()}</title>
        </Helmet>
      </HelmetProvider>

      <ProvidersContainer>
        <ProvidersToast>
          <Outlet />
        </ProvidersToast>
      </ProvidersContainer>
    </>
  )
}

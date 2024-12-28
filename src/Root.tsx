import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

import { ProvidersContainer } from '@/providers/providers-container'
import { utilGetAppTitle } from '@/shared/utils/get-app-title'

export function Root() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{utilGetAppTitle()}</title>
        </Helmet>
      </HelmetProvider>

      <ProvidersContainer>
        <Outlet />
      </ProvidersContainer>
    </>
  )
}

import { FC } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
// import { Route, Routes } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

import { appTitle } from '@/utils'
// import { ErrorPage } from '@/pages/ErrorPage'
// import { HomePage } from '@/pages/HomePage'

export const Root: FC = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{appTitle('')}</title>
        </Helmet>
      </HelmetProvider>
      <Outlet />
    </>
  )
}

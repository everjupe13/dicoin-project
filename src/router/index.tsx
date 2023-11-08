import { createBrowserRouter } from 'react-router-dom'

import { AboutPage } from '@/pages/AboutPage'
import { ErrorPage } from '@/pages/ErrorPage'
import { HomePage } from '@/pages/HomePage'
import { Root } from '@/Root'

export const routes = [
  {
    path: '',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/about',
        element: <AboutPage />
      }
    ]
  }
]

const router = createBrowserRouter(routes)

export default router

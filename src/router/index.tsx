import { createBrowserRouter } from 'react-router-dom'

import { AuthLayout } from '@/layout/auth'
import { AboutPage } from '@/pages/AboutPage'
import { ErrorPage } from '@/pages/ErrorPage'
import { HomePage } from '@/pages/HomePage'
import { SigninPage } from '@/pages/SigninPage'
import { SignupPage } from '@/pages/SignupPage'
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
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/auth/signin',
        element: <SigninPage />
      },
      {
        path: '/auth/signup',
        element: <SignupPage />
      }
    ]
  }
]

const router = createBrowserRouter(routes)

export default router

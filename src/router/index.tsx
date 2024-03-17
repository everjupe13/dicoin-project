import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'

import { AuthLayout } from '@/layout/auth'
import { DefaultLayout } from '@/layout/default'
import { AboutPage } from '@/pages/AboutPage'
import { AnalyticsPage } from '@/pages/AnalyticsPage'
import { BillsPage } from '@/pages/BillsPage'
import { ErrorPage } from '@/pages/ErrorPage'
import { HomePage } from '@/pages/HomePage'
import { SigninPage } from '@/pages/SigninPage'
import { SignupPage } from '@/pages/SignupPage'
import { SubscribersPage } from '@/pages/SubscribersPage'
import { Root } from '@/Root'

import { ProtectedRouteAuth } from './ui/ProtectedRouteAuth'
import { ProtectedRouteUser } from './ui/ProtectedRouteUser'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/subscribers" element={<SubscribersPage />} />
        <Route path="/bills" element={<BillsPage />} />
      </Route>
      <Route element={<ProtectedRouteUser isProtectedActive />}>
        <Route element={<DefaultLayout />}>
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/protected" element={<div>i am protected</div>} />
        </Route>
      </Route>
      <Route element={<ProtectedRouteAuth isProtectedActive />}>
        <Route element={<AuthLayout />}>
          <Route path="/auth/signin" element={<SigninPage />} />
          <Route path="/auth/signup" element={<SignupPage />} />
        </Route>
      </Route>
    </Route>
  )
)

export default router

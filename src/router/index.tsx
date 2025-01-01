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
import { ProfilePage } from '@/pages/ProfilePage'
import { SigninPage } from '@/pages/SigninPage'
import { SignupPage } from '@/pages/SignupPage'
import { SpendingsPage } from '@/pages/SpendingsPage'
import { SubscribersPage } from '@/pages/SubscribersPage'
import { Root } from '@/Root'
import { ROUTES } from '@/shared/const'

import { ProtectedRoutes } from './lib/ProtectedRoutes'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route element={<ProtectedRoutes type="logged" />}>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTES.ABOUT} element={<AboutPage />} />
          <Route path={ROUTES.SPENDINGS} element={<SpendingsPage />} />
          <Route path={ROUTES.PROFILE} element={<ProfilePage />} />

          {/* TODO убрать страницы / рефактор */}
          <Route path="/subscribers" element={<SubscribersPage />} />
          <Route path="/bills" element={<BillsPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/protected" element={<div>i am protected</div>} />
        </Route>
      </Route>

      <Route element={<ProtectedRoutes type="guest" />}>
        <Route element={<AuthLayout />}>
          <Route path={ROUTES.AUTH.SIGN_IN} element={<SigninPage />} />
          <Route path={ROUTES.AUTH.SIGN_UP} element={<SignupPage />} />
        </Route>
      </Route>
    </Route>
  )
)

export default router

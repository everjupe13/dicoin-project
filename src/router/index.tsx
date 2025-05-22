import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'

import { App } from '@/App'
import { AuthLayout } from '@/layout/auth'
import { DefaultLayout } from '@/layout/default'
import { AboutPage } from '@/pages/AboutPage'
import { AnalyticsPage } from '@/pages/AnalyticsPage'
import { SignInPage } from '@/pages/auth/SignInPage'
import { SignUpPage } from '@/pages/auth/SignUpPage'
import { BillsPage } from '@/pages/BillsPage'
import { ErrorPage } from '@/pages/ErrorPage'
import { HomePage } from '@/pages/HomePage'
import { NotFoundErrorPage } from '@/pages/NotFoundErrorPage'
import { ProfilePage } from '@/pages/ProfilePage'
import { SpendingsPage } from '@/pages/SpendingsPage'
import { SubscribersPage } from '@/pages/SubscribersPage'
import { TemporaryUIPage } from '@/pages/TemporaryUIPage'
import { ROUTES } from '@/shared/const'

import { ProtectedRoutes } from './lib/ProtectedRoutes'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} errorElement={<ErrorPage />}>
      <Route element={<ProtectedRoutes type="logged" />}>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path={ROUTES.ABOUT} element={<AboutPage />} />
          <Route path={ROUTES.SPENDINGS} element={<SpendingsPage />} />
          <Route path={ROUTES.PROFILE} element={<ProfilePage />} />

          <Route path="/storybook" element={<TemporaryUIPage />} />

          {/* TODO убрать страницы / рефактор */}
          <Route path="/subscribers" element={<SubscribersPage />} />
          <Route path="/bills" element={<BillsPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/protected" element={<div>i am protected</div>} />

          <Route path="*" element={<NotFoundErrorPage />}></Route>
        </Route>
      </Route>

      <Route element={<ProtectedRoutes type="guest" />}>
        <Route element={<AuthLayout />}>
          <Route path={ROUTES.AUTH.SIGN_IN} element={<SignInPage />} />
          <Route path={ROUTES.AUTH.SIGN_UP} element={<SignUpPage />} />
        </Route>
      </Route>
    </Route>
  )
)

export default router

import { FC } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

import { appTitle } from '@/app/core'
import { AuthContainer } from '@/components/features/auth-container'
import { ReactQueryProvider } from '@/components/features/react-query-provider'
// import AuthFakeApi from '@/logic/data/auth/AuthApi'
// import AuthHolder from '@/logic/domain/entity/auth/models/AuthHolder'
// import LoginUseCase from '@/logic/domain/interactors/auth/LoginUseCase'
// import AuthComponent from '@/logic/presentation/view/auth/AuthComponent'
// import AuthViewModelImpl from '@/logic/presentation/view-model/auth/AuthViewModelImpl'

export const Root: FC = () => {
  // // data layer
  // const authRepository = new AuthFakeApi()
  // // domain layer
  // const authHolder = new AuthHolder()
  // const loginUseCase = new LoginUseCase(authRepository, authHolder)
  // // view layer
  // const authViewModel = new AuthViewModelImpl(loginUseCase, authHolder)

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

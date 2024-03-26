import { PrivateRoute, VerifyRoute } from 'components'
import * as React from 'react'

const LoginLazy = React.lazy(() => import('./login'))

const InvestmentsLazy = React.lazy(() => import('./investments'))

const NewInvestmentLazy = React.lazy(() => import('./new-investment'))

const Login = () => (
  <VerifyRoute>
    <React.Suspense fallback={null}>
      <LoginLazy />
    </React.Suspense>
  </VerifyRoute>
)

const Investments = () => (
  <PrivateRoute>
    <React.Suspense fallback={null}>
      <InvestmentsLazy />
    </React.Suspense>
  </PrivateRoute>
)

const NewInvestment = () => (
  <PrivateRoute>
    <React.Suspense fallback={null}>
      <NewInvestmentLazy />
    </React.Suspense>
  </PrivateRoute>
)

export {
  Login,
  Investments,
  NewInvestment
}
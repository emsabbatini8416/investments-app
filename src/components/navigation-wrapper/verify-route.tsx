import { Navigate, RouteProps, useLocation } from 'react-router-dom'

import Routes from 'router/routes'
import { useAuth } from 'hooks'

const VerifyRoute = (props: Pick<RouteProps, 'children'>) => {
  const { children } = props

  const location = useLocation()

  const { token } = useAuth()

  if (token) {
    return <Navigate to={Routes.INVESTMENTS} state={location} />
  }

  return children as JSX.Element
}

export default VerifyRoute

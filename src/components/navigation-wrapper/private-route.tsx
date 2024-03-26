import { RouteProps } from 'react-router-dom'

const PrivateRoute = (props: Pick<RouteProps, 'children'>) => {
  const { children } = props

  return children as JSX.Element
}

export default PrivateRoute

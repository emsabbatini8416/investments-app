import * as React from 'react'
import { Navigate } from 'react-router-dom'

import Routes from 'router/routes'
import { useAuth } from 'hooks'

const WrapperPage = (props: Required<React.PropsWithChildren<unknown>>) => {
  const { children } = props

  const { token } = useAuth()

  if (!token) {
    return <Navigate to={Routes.LOGIN} state={null} replace={true} />
  }

  return children as JSX.Element
}

export default WrapperPage

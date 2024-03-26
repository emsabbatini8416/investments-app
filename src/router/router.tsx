import { Route, Routes as Switch } from 'react-router-dom'

import {
  Investments,
  Login,
  NewInvestment,
} from 'pages'
import { Page } from 'layouts'
import Routes from './routes'

const Router = () => (
  <Switch>
    <Route element={<Login />} index={true} />
    <Route path={Routes.LOGIN} element={<Login />} />
    <Route element={<Page />}>
      <Route path={Routes.INVESTMENTS} element={<Investments />} />
      <Route path={Routes.INVESTMENTS_NEW} element={<NewInvestment />} />
    </Route>
    <Route path="*" element={<div>Page not Found!!!</div>} />
  </Switch>
)

export default Router

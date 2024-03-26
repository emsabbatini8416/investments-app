import { Outlet } from 'react-router-dom'

import { NavBar, WrapperPage } from 'components'
import { Layout } from '../layout'
import { StyledOutletWrapper } from './styles'

const Page = () => (
  <WrapperPage>
    <Layout>
      <NavBar />
      <StyledOutletWrapper>
        <Outlet />
      </StyledOutletWrapper>
    </Layout>
  </WrapperPage>
)

export default Page

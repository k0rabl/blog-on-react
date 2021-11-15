import Detail from './pages/detail/detail'
import List from './pages/list/list'
import { RouteProps } from 'react-router'

const routes: Array<RouteProps> = [
  {
    path: '/add',
    component: Detail
  },
  {
    path: '/',
    exact: true,
    component: List
  },
  {
    path: '/:id',
    component: Detail
  }

]

export default routes
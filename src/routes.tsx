import Detail from './pages/Detail'
import List from './pages/List'
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
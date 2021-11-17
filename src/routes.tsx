import Detail from './pages/Detail/Detail'
import List from './pages/List/List'
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
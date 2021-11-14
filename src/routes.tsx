import Detail from './pages/detail/detail'
import List from './pages/list/list'
import { RouteProps } from 'react-router'
import Article from './components/article/Article'

const routes: Array<RouteProps> = [
  {
    path: '/add',
    component: Detail
  },
  {
    path: '/',
    component: List
  },
  {
    path: '/:id',
    component: Detail,
    children: Article
  }

]

export default routes
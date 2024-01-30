// routes.js
// import Management from '../views/management'
// import Login from '../views/login'
// import Error from '../views/404'
// import About from '../views/about'
// 路由懒加载
import { lazy } from 'react'
const Management = lazy(() => import('../views/management'))
const Login = lazy(() => import('../views/login'))
const Error = lazy(() => import('../views/404'))
const About = lazy(() => import('../views/about'))

/*
des:用于加载之前显示的内容 目前不需要显示 只需要懒加载即可
<Suspense fallback={'加载中'}>
<Login />
</Suspense>
*/

const routes = [
  {
    path: '/',
    element: <Login />,
    mate: {
      unWantedAuth: true,
    },
  },
  {
    path: '/login',
    element: <Login />,
    mate: {
      unWantedAuth: true,
    },
  },
  {
    path: '/management',
    element: <Management />,
  },
  {
    path: '/404',
    element: <Error />,
  },
  {
    path: '/about',
    element: <About />,
  },
]

export default routes

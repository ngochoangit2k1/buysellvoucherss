import { useRoutes } from 'react-router-dom'
import HomeLayout from './layouts/HomeLayout'
import Home from './pages/Home'

import NotFound from './pages/NotFound'
import ProductViewDetails from './pages/ProductViewDetails'
import ProductListDetails from './pages/ProductListDetails'

const useRouteElements = () => {
  const routeElements = useRoutes([
    {
      path: '/',
      index: true,
      element: (
        <HomeLayout>
          <Home />
        </HomeLayout>
      )
    },
    {
      path: '/products/view',
      element: (
        <HomeLayout>
          <ProductViewDetails />
        </HomeLayout>
      )
    },
    {
      path: '/products/list',
      element: (
        <HomeLayout>
          <ProductListDetails />
        </HomeLayout>
      )
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return routeElements
}
export default useRouteElements

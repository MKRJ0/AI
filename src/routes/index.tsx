import { createBrowserRouter } from 'react-router'
import App from '../App'
import HomePage from '../pages/home-page'
import ProductsPage from '../pages/products-page'
import CompanyPage from '../pages/company-page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'company', element: <CompanyPage /> },
    ],
  },
])

export default router

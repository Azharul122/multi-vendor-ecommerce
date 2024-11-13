import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Loader from './shared/loader/Loader.tsx'
import Orders from './pages/user/Shop/orders.tsx'
// import Home from './pages/user/Home/Home.tsx'
// import AdminHome from './pages/admin/AdminHome/AdminHome.tsx'
// import AdminLayout from './layouts/AdminLayout/AdminLaouts/AdminLayout.tsx'
// import SellerLayout from './layouts/SellerLayouts/SellerLayout/SellerLayout.tsx'
// import SellerHome from './pages/seller/SellerHome/SellerHome.tsx'
// import Shop from './pages/user/Shop/Shop.tsx'
// import ProductDetails from './pages/user/ProductDetails/ProductDetails.tsx'
// import NotFound from './components/ui/NotFound.tsx'
// import Login from './pages/Login.tsx'
// import SignUp from './pages/SignUp.tsx'
// import Search from './pages/user/search/Search.tsx'
// import NewsDetails from './pages/user/NewsDetails/NewsDetails.tsx'

const App = lazy(() => import('./App.tsx'))
const Home = lazy(() => import('./pages/user/Home/Home.tsx'));
const AdminHome = lazy(() => import('./pages/admin/AdminHome/AdminHome.tsx'));
const AdminLayout = lazy(() => import('./layouts/AdminLayout/AdminLaouts/AdminLayout.tsx'));
const SellerLayout = lazy(() => import('./layouts/SellerLayouts/SellerLayout/SellerLayout.tsx'));
const SellerHome = lazy(() => import('./pages/seller/SellerHome/SellerHome.tsx'));
const Shop = lazy(() => import('./pages/user/Shop/Shop.tsx'));
const ProductDetails = lazy(() => import('./pages/user/ProductDetails/ProductDetails.tsx'));
const NotFound = lazy(() => import('./components/ui/NotFound.tsx'));
const Login = lazy(() => import('./pages/Login.tsx'));
const SignUp = lazy(() => import('./pages/SignUp.tsx'));
const Search = lazy(() => import('./pages/user/search/Search.tsx'));
const NewsDetails = lazy(() => import('./pages/user/NewsDetails/NewsDetails.tsx'));


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "shop",
          element: <Shop />
        },
        {
          path: "/shop/orders",
          element: <Orders />
        },
        {
          path: "/products/:id",
          element: <ProductDetails />
        },
        {
          path: "/search",
          element: <Search />
        },
        {
          path: "/news/:id",
          element: <NewsDetails />
        },
      ]
    },
    {
      path: "/dashboard/admin",
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <AdminHome />
        }
      ]
    },
    {
      path: "/dashboard/seller",
      element: <SellerLayout />,
      children: [
        {
          index: true,
          element: <SellerHome />
        }
      ]
    },
    {
      path: '*',
      element: <NotFound />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <SignUp />
    },


  ]
)

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <Suspense fallback={<Loader/>}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  </StrictMode>,

)

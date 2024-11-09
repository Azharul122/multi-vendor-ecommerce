import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/user/Home/Home.tsx'
import AdminHome from './pages/admin/AdminHome/AdminHome.tsx'
import AdminLayout from './layouts/AdminLayout/AdminLaouts/AdminLayout.tsx'
import SellerLayout from './layouts/SellerLayouts/SellerLayout/SellerLayout.tsx'
import SellerHome from './pages/seller/SellerHome/SellerHome.tsx'
import Shop from './pages/user/Shop/Shop.tsx'
import ProductDetails from './pages/user/ProductDetails/ProductDetails.tsx'
import NotFound from './components/ui/NotFound.tsx'

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
          path:"/products/:id",
          element:<ProductDetails/>
        }
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
      element:<NotFound/>
    },


  ]
)

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,

)

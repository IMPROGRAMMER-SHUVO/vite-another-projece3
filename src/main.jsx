import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop.jsx';
import Home from './components/Layout/Home';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Cartproductloder from './components/Cartproductloder/Cartproductloder';
import Chackout from './components/ChackOut/Chackout';
const router= createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:([
      {
        path:'/',
        element:<Shop></Shop>
      },
      {
        path: 'orders',
        element:<Orders></Orders>,
        loader:Cartproductloder
      },
      {
        path:'Inventory',
        element:<Inventory></Inventory>
      },
      {
        path:'Login',
        element:<Login></Login>
      },
      {
        path :'chackout',
        element:<Chackout></Chackout>
      }
    ])
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router}/>
  </React.StrictMode>,
)

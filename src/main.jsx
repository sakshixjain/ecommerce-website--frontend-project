import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, createBrowserRouter,createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import './index.css';
import './responsive.css'
import Pretzel from './pretzel/Pretzel.jsx'
import Front from './website/Front.jsx'
import Waffles from './Waffles/Waffles.jsx'
import Sauce from './Sauce&Topings/Sauce.jsx'
import Gift from './Gift Boxes/Gift.jsx'
import Recipes from './Recipes/Recipes.jsx'
import Chat from './Chat/Chat.jsx'
import Login from './Login/Login.jsx'
import Search from './Search Bar/Search.jsx'
import Shop from './shop now/Shop.jsx'

const router = createBrowserRouter(
  createRoutesFromElements( 
    
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Front/>}/>
      <Route path='Pretzels' element={<Pretzel/>}/>
      <Route path='Chat' element={<Chat/>}/>
      <Route path='Waffles' element={<Waffles/>}/>
      <Route path='Sauce&Toppings' element={<Sauce/>}/>
      <Route path='GiftBoxes' element={<Gift/>}/>
      <Route path='Recipes' element={<Recipes/>}/>
      <Route path='Login' element={<Login/>}/>
      <Route path='Search' element={<Search/>}/>
      <Route path='Shop' element={<Shop/>}/>
    </Route>
       
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)

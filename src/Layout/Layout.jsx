import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import Chat from '../Chat with us/Chat'
function Layout() {
  return (
    <div>
   
     <Header/>
     <Chat/>
        <Outlet/>
       <Footer/>
    </div>
  )
}

export default Layout

import React from 'react'
import { Outlet } from "react-router"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
function Layout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout
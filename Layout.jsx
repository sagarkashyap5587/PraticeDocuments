import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import FooterProject2 from './FooterProject2'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <FooterProject2/>
    </>
  )
}

export default Layout
import React from 'react'
import { Outlet } from 'react-router-dom'
import Dashboard from './components/Admin/Dashboard'

export default function Layout() {
  return (
    <div>
        {/* <Dashboard/> */}
        <Outlet/>
    </div>
  )
}

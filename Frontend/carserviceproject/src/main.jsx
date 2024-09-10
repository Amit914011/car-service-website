import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Service from './components/Service.jsx'
import Hero from './components/Hero.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Login from './components/Login.jsx'
import AdminLogin from './components/Admin/AdminLogin.jsx'
import Layout from './Layout.jsx'
import ViewCarData from './components/Admin/ViewCarData.jsx'
import Dashboard from './components/Admin/Dashboard.jsx'
import UpdateData from './components/Admin/UpdateData.jsx'
import ViewAllData from './components/Admin/ViewAllData.jsx'


let router=createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App/>}>
      <Route path='' element={<Hero/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/login' element={<Login/>}/>

    </Route>
    <Route path='/admin' element={<Layout/>}>
    <Route path='/admin/' element={<Dashboard/>}/>
    <Route path='/admin/login' element={<AdminLogin/>}/>
    <Route path='/admin/viewData' element={<ViewCarData/>}/>
    <Route path='/admin/updatedata/:id' element={<UpdateData/>}/>
    <Route path='/admin/viewalldata' element={<ViewAllData/>}/>
    
    

      
    </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

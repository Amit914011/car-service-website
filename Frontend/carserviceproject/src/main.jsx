import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Service from './components/Service.jsx'
import Hero from './components/Hero.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Login from './components/Login.jsx'
import Admin from './Admin.jsx'

let router=createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App/>}>
      <Route path='' element={<Hero/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/login' element={<Login/>}/>

    </Route>
    <Route path='/admin' element={<Admin/>}>
      
    </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

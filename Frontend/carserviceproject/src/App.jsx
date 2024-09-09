import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CallUs from './components/CallUs'
import UserContextProvider from './context/UserContextProvider'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <UserContextProvider>
    <Navbar/>
    <Outlet/>
    <div className='fixed z-50 bottom-3 right-5'>
    <CallUs/>
    </div>
    <Footer/>
    </UserContextProvider>
  </>
  )
}

export default App

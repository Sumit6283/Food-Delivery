import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrders from './Pages/PlaceOrders/PlaceOrders'
import Footer from './Components/Footer/Footer'
import AppDownload from './Components/AppDownload/AppDownload'

const App = () => {
  return (
    <>
    <div className='app'>
        <Navbar/>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/cart' element={<Cart/>}/>
           <Route path='/order' element={<PlaceOrders/>}/>
        </Routes>
        <AppDownload/>
    </div>
     <Footer/>
     </>
  )
}

export default App
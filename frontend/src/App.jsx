import React from 'react'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import { Navigate, Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin';
import Product from './pages/product';
import Inventory from './pages/Inventory';

function App() {
  return (
   <>
    <div className="App">
    
      <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/add_products' element={<Product/>} />
        <Route path='/buy_products' element={<Inventory />} />
      </Routes>
    </div>
   </>
  )
}

export default App
import React from 'react'
import Counter from './Components/Counter'
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import Cart from './Components/Cart'
import {BrowserRouter, Routes,Route} from 'react-router-dom'


const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Product />}/>
        <Route path='/cart' element={<Cart />}/>
      
      
      
      </Routes>
      </BrowserRouter>






    </div>
  )
}

export default App
//rafce
//delete asset
//delete index.css
//ab setup
//src me ek folfer redux issme ek or folder store isme index.jsx  usme step 1 code then over


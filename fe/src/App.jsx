import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import DetailaComponent from './components/DetailaComponent'
import SendOtp from './user_email/SendOtp'
import OtpVerify from './user_email/OtpVerify'
import ShowCart from './components/ShowCart'
import Invoice from './components/Invoice'
import AllProducts from './products/AllProducts'
import FruitProducts from './products/FruitProducts'
import VegetableProducts from './products/VegetableProducts'
import FoodGrains from './products/FoodGrains'
import AddProduct from './admin/AddProduct'
import SearchComp from './components/SearchComp'

const App = () => {
  return (
    <div>
      <Navbar />
      <SearchComp />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/single/:id' element={<DetailaComponent />} />
        <Route path='/send-otp' element={<SendOtp />} />
        <Route path='/verify-otp' element={<OtpVerify />} />
        <Route path='/cart' element={<ShowCart />} />
        <Route path='/invoice' element={<Invoice />} />
        <Route path='/add-[roduct' element={<AddProduct />} />
        <Route path='/all-product' element={<AllProducts />} />
        <Route path='/fruit-products' element={<FruitProducts />} />
        <Route path='/vegetables' element={<VegetableProducts />} />
        <Route path='/food-grains' element={<FoodGrains />} />
      </Routes>
    </div>
  )
}

export default App

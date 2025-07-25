import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import CategoriesPage from '../components/CategoriesPage'
import ProductPage from '../pages/ProductPage'
import LoginPage from '../pages/LoginPage'
import AboutPage from '../pages/AboutPage'

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<CategoriesPage />} />
        <Route path='/product/:slug' element={<ProductPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </div>
  )
}

export default MainRoutes
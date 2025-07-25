import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/footer'
import MainRoutes from './routes/MainRoutes'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div >
      <Header />
      <MainRoutes />
      <Footer />
    </div>


  )
}

export default App
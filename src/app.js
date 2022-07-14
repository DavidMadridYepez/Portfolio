import React from 'react'
import { Working } from './components/working'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './layout/navbar'
import Home from './pages/home'
import Portfolio from './pages/portfolio'
import Footer from './layout/footer'
import NoRoute from './components/errors/noRoute'

function App() {
  return (
    <div className='h-screen flex flex-col justify-between bg-black'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Working />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='*' element={<NoRoute />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
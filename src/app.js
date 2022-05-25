import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import About from './pages/about'
import Portfolio from './pages/portfolio'

function App() {
  return (
    <div className='bg-gray-900 px-7 md:px-20 xl:px-7'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
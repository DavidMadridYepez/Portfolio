import React from 'react'
import { Working } from './components/working'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './layout/navbar'
import Home from './pages/about'
import Footer from './layout/footer'

function App() {
  return (
    <div className='h-screen flex flex-col justify-between bg-neutral-900'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
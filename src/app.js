import React from 'react'
import { Working } from './components/working'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './layout/navbar'
import Home from './pages/about'
import Footer from './layout/footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
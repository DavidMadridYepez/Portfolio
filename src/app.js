import React from 'react'
import { Working } from './components/working'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './layout/navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  )
}

export default App
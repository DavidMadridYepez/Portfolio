import React from 'react'
import { Working } from './components/working'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='bg-neutral-900'>
        <Working />
      </div>
    </BrowserRouter>
  )
}

export default App
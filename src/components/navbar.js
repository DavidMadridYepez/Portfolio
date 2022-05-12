import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-between px-10 py-5'>
      <div>
        Logo
      </div>
      <div className='space-x-5 text-white'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/portfolio'>Portfolio</NavLink>
        <a href="mailto:davidmadridyepez@gmail.com">Get in touch</a>
      </div>
    </div>
  )
}

export default Navbar
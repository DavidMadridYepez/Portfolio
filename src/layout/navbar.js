import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='bg-neutral-800 text-white flex justify-between p-10'>
      <div>
        <i>Logo</i>
      </div>
      <div className='space-x-10'>
        <NavLink to='/'>HOME</NavLink>
        <NavLink to='/about'>ABOUT</NavLink>
        <NavLink to='/portfolio'>PORTFOLIO</NavLink>
        <a href="mailto:davidmadridpathway@gmail.com">GET IN TOUCH</a>
      </div>
    </div>
  )
}

export default Navbar
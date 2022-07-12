import React from 'react'
import { NavLink } from 'react-router-dom'
import { active, unactive } from '../assets/styles'


const Navbar = () => {
  return (
    <div className='bg-neutral-900 text-white flex justify-between p-10 pt-16'>
      <div>
        <i>Logo</i>
      </div>
      <div className='space-x-10'>
        <NavLink className={({ isActive }) => isActive ? active : unactive} to='/'>HOME</NavLink>
        <NavLink className={({ isActive }) => isActive ? active : unactive} to='/about'>ABOUT</NavLink>
        <NavLink className={({ isActive }) => isActive ? active : unactive} to='/portfolio'>PORTFOLIO</NavLink>
        <a className='border border-red-600 text-red-600 p-1' href="mailto:davidmadridpathway@gmail.com">GET IN TOUCH</a>
      </div>
    </div>
  )
}

export default Navbar
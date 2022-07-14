import React from 'react'
import { NavLink } from 'react-router-dom'
import { activeSlide, unactiveSlide } from '../assets/styles'

function Slidebar({ onClick }) {
  return (
    <div className=' md:hidden flex flex-col justify-between h-screen bg-neutral-800 text-xl text-white py-10 '>
      <div className='flex flex-col space-y-2'>
        <NavLink onClick={onClick} className={({ isActive }) => isActive ? activeSlide : unactiveSlide} to='/'>Home</NavLink>
        <NavLink onClick={onClick} className={({ isActive }) => isActive ? activeSlide : unactiveSlide} to='/about'>About</NavLink>
        <NavLink onClick={onClick} className={({ isActive }) => isActive ? activeSlide : unactiveSlide} to='/portfolio'>Portfolio</NavLink>
      </div>
      <div className='px-5 py-3 bg-red-600 hover:bg-red-500 text-neutral-800 font-medium duration-100 cursor-pointer'>
        <a href="mailto:davidmadridpathway@gmail.com">GET IN TOUCH</a>
      </div>
    </div>
  )
}

export default Slidebar
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { active, unactive } from '../assets/styles'
import menu from '../assets/images/menu (2).png'
import arrow from '../assets/images/arrow.png'
import Slidebar from './slidebar'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleClick = () => setMenuOpen(!menuOpen)

  return (
    <>
      <div className={`-translate-x-full absolute ${menuOpen ? 'duration-300 translate-x-0' : 'duration-300'}`}>
        <Slidebar onClick={handleClick} />
      </div>
      <div className='bg-black text-white items-center flex justify-between p-10 pt-16'>
        <div>
          <img className='w-14' src={arrow} alt="" />
        </div>
        <button onClick={handleClick} ><img className={`md:hidden ${menuOpen ? 'duration-300 -rotate-90' : 'duration-300 rotate-0'}`} src={menu} alt="" /></button>
        <div className='space-x-10 hidden md:flex'>
          <NavLink className={({ isActive }) => isActive ? active : unactive} to='/'>HOME</NavLink>
          <NavLink className={({ isActive }) => isActive ? active : unactive} to='/about'>ABOUT</NavLink>
          <NavLink className={({ isActive }) => isActive ? active : unactive} to='/portfolio'>PORTFOLIO</NavLink>
          <a className='font-medium text-neutral-900 duration-200 hover:bg-neutral-900 hover:text-red-600 bg-red-600 border border-red-600 p-1' href="mailto:davidmadridpathway@gmail.com">GET IN TOUCH</a>
        </div>
      </div >
    </>

  )
}

export default Navbar
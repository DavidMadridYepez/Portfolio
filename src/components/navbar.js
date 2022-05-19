import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-between items-center py-10 '>
      <div className='w-20'>
        <img src="./images/logo.png" alt="" />
      </div>
      <div className='space-x-5 text-white'>
        <NavLink to='/' className={({ isActive }) => isActive ? "text-emerald-300 rounded px-3 py-2 border-2 border-emerald-300 duration-100" : "duration-100 border-2 border-transparent px-3 py-2"}>Home</NavLink>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-emerald-300 rounded px-3 py-2 border-2 border-emerald-300 duration-100" : "duration-100 border-2 border-transparent px-3 py-2"}>About</NavLink>
        <NavLink to='/portfolio' className={({ isActive }) => isActive ? "text-emerald-300 rounded px-3 py-2 border-2 border-emerald-300 duration-100" : "duration-100 border-2 border-transparent px-3 py-2"}>Portolio</NavLink>
        <a className='rounded duration-100 px-3 py-2 text-emerald-300 border border-emerald-300  hover:bg-emerald-800' href="mailto:davidmadridyepez@gmail.com">Get in touch</a>
      </div>
    </div>
  )
}

export default Navbar
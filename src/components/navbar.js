import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Slidebar from './slidebar'

function Navbar() {
  const [menu, setMenu] = useState(false)
  const handleClick = () => setMenu(!menu)

  return (
    <div className='flex items-center justify-between py-10'>
      <div className={`${menu ? '' : 'hidden'}`}>
        <Slidebar handleClick={handleClick} />
      </div>
      <div className='justify-center w-full flex items-center '>
        <div className='flex w-full justify-between'>
          <img className='w-20' src="./images/logo.png" alt="" />
          <button onClick={handleClick} className='md:hidden'><img className='w-5' src="./images/menu(2).png" alt="" /></button>
        </div>
        <div className='hidden w-full md:flex space-x-5 text-white items-center justify-end'>
          <NavLink to='/' className={({ isActive }) => isActive ? "px-3 py-2 text-emerald-300 rounded border-2 border-emerald-300 duration-100" : "duration-100 border-2 px-3 py-2 border-transparent"}>Home</NavLink>
          <NavLink to='/about' className={({ isActive }) => isActive ? "px-3 py-2 text-emerald-300 rounded border-2 border-emerald-300 duration-100" : "duration-100 border-2 px-3 py-2 border-transparent"}>About</NavLink>
          <NavLink to='/portfolio' className={({ isActive }) => isActive ? "px-3 py-2 text-emerald-300 rounded border-2 border-emerald-300 duration-100" : "duration-100 border-2 px-3 py-2 border-transparent"}>Portolio</NavLink>
          <a className='px-3 py-2 rounded duration-100 text-emerald-300 border border-emerald-300  hover:bg-emerald-800' href="mailto:davidmadridyepez@gmail.com">Get in touch</a>
        </div>
      </div>
    </div>

  )
}

export default Navbar
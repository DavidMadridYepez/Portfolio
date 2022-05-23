import React from 'react'
import { NavLink } from 'react-router-dom'

function Slidebar({ handleClick }) {
  return (
    <div className='rounded p-2 pb-7 flex flex-col absolute top-3 left-3 right-3 bg-gray-800 '>
      <div className='pt-3 pb-5 flex justify-between'>
        <img className='w-10' src="./images/logo.png" alt="" />
        <button onClick={handleClick} className='my-2 rounded border-2 p-1 border-emerald-300'><img className='w-3 h-3' src="./images/x.png" alt="" /></button>
      </div>
      <div className='flex flex-col space-y-1'>
        <NavLink onClick={handleClick} to='/' className={({ isActive }) => isActive ? 'bg-gray-900 p-1 duration-100 text-gray-300 rounded' : 'p-1 duration-100 hover:bg-gray-600 text-gray-300 rounded'}>Home</NavLink>
        <NavLink onClick={handleClick} to='/about' className={({ isActive }) => isActive ? 'bg-gray-900 p-1 duration-100 text-gray-300 rounded' : 'p-1 duration-100 hover:bg-gray-600 text-gray-300 rounded'}>About</NavLink>
        <NavLink onClick={handleClick} to='/portfolio' className={({ isActive }) => isActive ? 'bg-gray-900 p-1 duration-100 text-gray-300 rounded' : 'p-1 duration-100 hover:bg-gray-600 text-gray-300 rounded'}>Portolio</NavLink>
        <a className='rounded p-1 duration-100 text-emerald-300 hover:bg-emerald-900' href="mailto:davidmadridyepez@gmail.com">Get in touch</a>
      </div >
    </div >
  )
}

export default Slidebar
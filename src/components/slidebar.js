import React from 'react'
import { NavLink } from 'react-router-dom'

function Slidebar({ handleClick }) {
  return (
    <div className='rounded p-2 pb-5 flex flex-col absolute md:hidden top-3 left-3 right-3 bg-gray-800'>
      <div className='py-3 flex justify-between'>
        <i>Logo</i>
        <button><img src="" alt="" /></button>
      </div>
      <div className='flex flex-col space-y-1'>
        <NavLink to='/' className="p-1 duration-100 hover:bg-gray-600 text-gray-300 rounded">Home</NavLink>
        <NavLink to='/about' className="p-1 duration-100 hover:bg-gray-600 text-gray-300 rounded">About</NavLink>
        <NavLink to='/portfolio' className="p-1 duration-100 hover:bg-gray-600 text-gray-300 rounded">Portolio</NavLink>
        <a className='rounded p-1 duration-100 text-emerald-300 hover:bg-emerald-900' href="mailto:davidmadridyepez@gmail.com">Get in touch</a>
      </div>
    </div >
  )
}

export default Slidebar
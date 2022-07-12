import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <div>
        <i>Logo</i>
      </div>
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/portfolio'>Portfolio</NavLink>
      </div>
    </div>
  )
}

export default Navbar
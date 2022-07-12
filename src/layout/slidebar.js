import React from 'react'
import { Link } from 'react-router-dom'

function Slidebar() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/portfolio'>Portfolio</Link>
      <a href="mailto:davidmadridpathway@gmail.com">GET IN TOUCH</a>
    </div>
  )
}

export default Slidebar
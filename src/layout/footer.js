import React from 'react'
import { mouseover } from '../assets/styles'
import linkedin from '../assets/images/linkedin (1).png'
import instagram from '../assets/images/instagram (1).png'
import github from '../assets/images/github (1).png'

function Footer() {
  return (
    <div className='px-10 py-5 w-full text-white flex justify-between items-center bg-black'>
      <div>
        <p>© 2022 David Madrid. All rights reserved.</p>
      </div>
      <div className='space-x-5 flex'>
        <img className={mouseover} src={linkedin} alt="" />
        <img className={mouseover} src={github} alt="" />
        <img className={mouseover} src={instagram} alt="" />
      </div>
    </div>
  )
}

export default Footer
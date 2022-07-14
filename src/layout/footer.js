import React from 'react'
import { mouseover } from '../assets/styles'
import linkedin from '../assets/images/linkedin (1).png'
import instagram from '../assets/images/instagram (1).png'
import github from '../assets/images/github (1).png'

function Footer() {
  return (
    <div className='px-10 pb-5 pt-10 w-full text-white md:flex-row flex flex-col space-y-5 justify-between items-center bg-black'>
      <div>
        <p>© 2022 David Madrid. All rights reserved.</p>
      </div>
      <div className='space-x-5 flex'>
        <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/david-madrid-0809211a1/"><img className={mouseover} src={linkedin} alt="" /></a>
        <a target='_blank' rel='noreferrer' href="https://github.com/DavidMadridYepez"><img className={mouseover} src={github} alt="" /></a>
        <a target='_blank' rel='noreferrer' href="https://www.instagram.com/dmadridy/"><img className={mouseover} src={instagram} alt="" /></a>
      </div>
    </div>
  )
}

export default Footer
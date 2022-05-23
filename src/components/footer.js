import React from 'react'

function Footer() {
  return (
    <div className='space-y-5 md:space-y-0 flex flex-col md:flex-row justify-between py-10 items-center'>
      <p className='text-gray-400'>© 2022 David Madrid. All rights reserved.</p>
      <div className='flex space-x-3 space-x-5'>
        <a href="https://www.instagram.com/dmadridy/" target='_blank.'><img className='w-5 hover:cursor-pointer h-5' src="./images/instagram(2).png" alt="" /></a>
        <a href="https://github.com/DavidMadridYepez" target='_blank.'><img className='w-5 hover:cursor-pointer h-5' src="./images/github(2).png" alt="" /></a>
        <a href="https://www.linkedin.com/in/david-madrid-0809211a1/" target='_blank.'><img className='w-5 hover:cursor-pointer h-5' src="./images/linkedin (2).png" alt="" /></a>
      </div>
    </div>
  )
}

export default Footer
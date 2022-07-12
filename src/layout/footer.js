import React from 'react'

function Footer() {
  return (
    <div className='px-10 py-5 w-full text-white flex justify-between items-center bg-neutral-900'>
      <div>
        <p>© 2022 David Madrid. All rights reserved.</p>
      </div>
      <div className='space-x-5'>
        <i>Linkedin</i>
        <i>Github</i>
        <i>Instagram</i>
      </div>
    </div>
  )
}

export default Footer
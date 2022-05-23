import React from 'react'

function Portfolio() {
  return (
    <div className='pb-10' >
      <h1 className='text-center text-5xl font-bold text-white m-5'>My Recent Projects</h1>
      <div className='w-full flex justify-center'>
        <a className='text-white text-2xl font-bold flex flex-col p-3 items-center border border-cyan-900 m-10 hover:scale-110 duration-100' target='blank' href="https://news-web-app-seven.vercel.app/">
          <img className='h-60 mb-3' src="./images/dragon.png" alt="" />
          <h1>League Of Legends</h1>
        </a>
        <a className='flex flex-col p-3 items-center border border-cyan-900 m-10 hover:scale-110 duration-100 text-white text-2xl font-bold' target='blank' href="https://navbar-template-app.vercel.app/">
          <img className='h-60 mb-3' src="./images/mountains.png" alt="" />
          <h1>Travel Guide</h1>
        </a>
        <a className='flex flex-col p-3 items-center border border-cyan-900 m-10 hover:scale-110 duration-100 text-white text-2xl font-bold' target='blank' href="https://jobs-web-app.vercel.app/">
          <img className='h-60 mb-3' src="./images/headhunting.png" alt="" />
          <h1>Job Description</h1>
        </a>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Portfolio
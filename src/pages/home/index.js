import React from 'react'

const Home = () => {
  return (
    <div className='p-10 text-white bg-black md:w-4/5 xl:w-3/5'>
      <h2 className='xl:text-5xl text-3xl'>Hi, I'm <span className='text-red-600 font-medium'>David Madrid</span></h2>
      <h1 className='xl:text-6xl text-4xl py-2'>I build things with React.</h1>
      <p className='text-xl py-5 mb-3'>
        I'm a passionate front-end engineer; I enjoy learning and practicing new technologies, architectural styles, and new patterns.
        Life without challenges would be boring, that why I'm always facing new problems and getting into new adventures!
      </p>
      <a className='text-neutral-900 duration-200 hover:bg-neutral-900 hover:text-red-600 bg-red-600 border-2 border-red-600 font-medium p-2 text-lg' href="#">DOWNLOAD CV</a>
    </div>
  )
}

export default Home
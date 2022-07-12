import React from 'react'

const Home = () => {
  return (
    <div className='flex p-10 text-white bg-black'>
      <div className='w-3/5'>
        <h2 className='text-5xl'>Hi, I'm <span className='text-red-600'>David Madrid</span></h2>
        <h1 className='text-6xl py-2'>I build things with React.</h1>
        <p className='text-xl py-5'>
          Im a passionate front-end engineer; I enjoy learning and practicing new technologies, architectural styles, and new patterns.
          Life without challenges would be boring, that why I'm always facing new problems and getting into new adventures!
        </p>
        <a className='text-neutral-900 duration-200 hover:bg-neutral-900 hover:text-red-600 bg-red-600 border-2 border-red-600 font-medium p-2 text-lg' href="#">DOWNLOAD CV</a>
      </div>
      <div className='w-2/5 flex items-center justify-center'>
      </div>
    </div>
  )
}

export default Home
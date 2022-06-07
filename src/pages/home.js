import React from 'react'

function Home() {
  return (
    <div className='pt-10 xl:h-full flex flex-col justify-center' >
      <article className='md:w-2/3 xl:w-1/2' >
        <img className='w-16 rounded-full h-16 mb-3' src="./images/profile.jpeg" alt="" />
        <p className='text-emerald-300 text-lg md:text-xl mb-3'>Hi, my name is</p>
        <h1 className='font-semibold text-4xl md:text-6xl text-white mb-2'>David Madrid.</h1>
        <p className='font-semibold text-4xl md:text-6xl text-gray-400 mb-10'>I build things with <span className='text-cyan-300'>React </span><img className='w-10 inline' src="./images/react.logo.jpg" alt="" />.</p>
        <p className='text-gray-400 text-lg md:text-xl mb-16'>I'm a Front-end Engineer specializing in building exceptional web applications.
          In my free time, I'm probably working on personal projects or learning new things.
          BUT, you could find me doing Calisthenics, Traveling, Reading, playing Chess and recently cooking.</p>
      </article>
      <img src="" alt="" />
    </div>
  )
}

export default Home
import React from 'react'

function About() {
  return (
    <div className='mb-10' >
      <h1 className='my-7 text-left text-white text-5xl font-bold'>Hi, Im David 👋</h1>
      <p className='mb-20 text-gray-400 text-xl'>I'm a Front-end engineer. I was born in 2001 (you can do the math) and grew up in the city of Montería, <span className='text-yellow-500'>Co</span><span className='text-blue-500'>lom</span><span className='text-red-500'>bia</span>.</p>
      <div className='flex space-x-40'>
        <section className='w-1/2'>
          <h1 className='mb-10 text-white text-3xl font-bold'><a className='text-emerald-300' href="#">#</a> Me</h1>
          <article className='space-y-8 text-gray-400 text-xl leading-8'>
            <p>I went to the North University where Im currently studying Business Management with an emphasis in Networking (yes, I'm a big fan of the internet 🤷‍♂️). I didn't graduate and probably never will since I already learned the topics that would make a difference in my career (OOP, FP, data structures, and compilers). Also, today companies don't require you to have a degree, so it isn't worth investing time.</p>
            <p>After deciding to focus on learning everything related to front-end development (I used this roadmap to track the topics I needed to learn), I spent almost 3 months learning everything from HTML up to ReactJS. Finally, I got my first job in May 2020 at Fluid Attacks.</p>
            <p>Like everyone, I had difficulties in my learning process:</p>
            <ul className='space-y-3'>
              <li className='flex items-center space-x-5'>
                <img className='h-2' src="./images/circle.png" alt="" /> <p>Something didn't click immediately.</p>
              </li>
              <li className='flex items-center space-x-5'>
                <img className='h-2' src="./images/circle.png" alt="" /> <p>I forgot about something I supposedly learned a week before. 😕</p>
              </li>
              <li className='flex items-center space-x-5'>
                <img className='h-2' src="./images/circle.png" alt="" /> <p>Sometimes it was just that the topic was too difficult to wrap my head around it.</p>
              </li>
            </ul>
            <p>My advice if you're having the same difficulties is to take this course. It'll give you powerful tools to improve your learning ability, and the best thing, is freemium! 🥳.</p>
          </article>
        </section>
        <section className='w-1/2'>
          <h1 className='mb-10 text-white text-3xl font-bold'><a className='text-emerald-300' href="#">#</a> Now</h1>
          <article className='space-y-8 text-gray-400 text-xl leading-8'>
            <p>I now work as a Frontend Tech Lead for the Ottomoto account at Lean Tech. I've been developing websites from e-commerce sites to web applications for more than 1 year.</p>
            <p>I continue spending a lot of time learning new technologies, patterns, libraries, etc. And I'm trying different ways to find a balance within that, my current hobbies (CrossFit, videogames, and movies) and the ones I'm trying to build (traveling, cooking and writing).</p>
            <p>I'm going to start creating content about frontend development, so I invite you to maintain contact through my social networks:</p>
            <div className='flex'>
              <i>Logo</i>
              <i>Logo</i>
              <i>Logo</i>
            </div>
          </article>
        </section>
      </div>
    </div>
  )
}

export default About
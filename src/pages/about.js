import React from 'react'

function About() {
  return (
    <div className='mb-10' >
      <h1 className='my-7 text-left text-white text-5xl font-bold'>Hi, Im David 👋</h1>
      <p className='mb-20 text-gray-400 text-xl'>I'm a Front-end engineer. I was born in 2001 (you can do the math) and grew up in the city of Montería, <span className='text-yellow-500'>Co</span><span className='text-blue-500'>lom</span><span className='text-red-500'>bia</span>.</p>
      <div className='flex flex-col md:flex-row md:space-x-40 space-y-20 md:space-y-0'>
        <section className='md:w-1/2'>
          <h1 className='mb-10 text-white text-3xl font-bold'><a className='text-emerald-300' href="#">#</a> Me</h1>
          <article className='space-y-8 text-gray-400 text-xl leading-8'>
            <p>I went to the <a className='text-emerald-300' href="https://www.uninorte.edu.co/">North University</a>  where I’m currently studying <span className='text-white font-semibold'>Business Management</span> . But growing up surrounded by engineers (my dad, my brother, almost all my cousins) made me got interested in programming languages and networking (yes, I'm a big fan of the internet 🤷‍♂️). As a result, I developed first a hobby, and then it became my passion… The Web Development.</p>
            <p>After deciding to focus on learning everything related to front-end development (I used this <a className='text-emerald-300' href="https://roadmap.sh/frontend">roadmap</a> to track the topics I needed to learn), I spent almost 5 months learning everything from HTML up to ReactJS. Finally, I was able to make my own projects and excellent web pages. Here is my <a className='text-emerald-300' href="/porfolio">Portfolio</a> . Check it out!</p>
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
            <p>My advice if you're having the same difficulties is to take <a className='text-emerald-300' href="https://www.coursera.org/learn/learning-how-to-learn">this course</a> . It'll give you powerful tools to improve your learning ability, and the best thing, is freemium! 🥳.</p>
          </article>
        </section>
        <section className='md:w-1/2'>
          <h1 className='mb-10 text-white text-3xl font-bold'><a className='text-emerald-300' href="#">#</a> Now</h1>
          <article className='space-y-8 text-gray-400 text-xl leading-8'>
            <p>I now keep learning as much as I can to get a job. Ive been development personal projects and freelancing for almost 1 year now.</p>
            <p>I continue spending a lot of time learning new technologies, patterns, libraries, etc.And I'm trying different ways to find a balance within that, my current hobbies (Excersise, Chess, and reading) and the ones I'm trying to build (traveling, cooking and writing).</p>
            <p>You can also find me on my social networks:</p>
            <div className='flex space-x-7'>
              <a className='w-14' href="https://www.instagram.com/dmadridy/"><img src="./images/instagram(4).png" alt="" /></a>
              <a className='w-14' href="https://github.com/DavidMadridYepez"><img src="./images/github(3).png" alt="" /></a>
              <a className='w-14' href="https://www.linkedin.com/in/david-madrid-0809211a1/"><img src="./images/linkedin(1).png" alt="" /></a>
            </div>
          </article>
        </section>
      </div>
    </div>
  )
}

export default About
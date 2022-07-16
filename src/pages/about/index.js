import React from 'react'

const About = () => {
  return (
    <div className='md:flex justify-around text-white bg-black text-xl'>
      <div className='md:w-1/2 p-10 text-justify'>
        <div className='text-3xl font-bold'><a className='text-red-600' href="#">#</a>Me</div>
        <br />
        <p>I was born in 2001 (You can do the math) in Monteria, <span className='text-yellow-400'>Co</span><span className='text-blue-600'>lom</span><span className='text-red-600'>bia.</span></p>
        <br />
        <p>I Studied Business Management at Universidad Del Norte, where I expect to graduate this November. Now, you are probably wonder:
          From Business to Programming it’s a long way heh? Indeed, but to be honest with you, I entered college at 16,
          and I didn’t have any idea of what to do with my life, so I picked what I was good at
          (I’m pretty good speaking at public, leading teams, and working with people). </p>
        <br />
        <p>
          Okay, I understand but you haven’t
          explained why Programming… Well, when covid broke and everyone had to stay In home,
          I got really bored, not knowing what to do or what learn; Guess what, my father,
          my brother and 7 of my 9 cousins are programmers, and the 2 last are on their way to be one ha-ha,
          so, it happened what had to happen, I became interested in programming and finally decided to be a Frontend Developer,
          I used this <a className='text-red-600' href="https://roadmap.sh/frontend">Roadmap</a> as a guide which I recommend a lot. Likewise, I know it might be overwhelmed to face something you
          had never done before, in those cases, I recommend taking this <a className='text-red-600' href="https://www.coursera.org/learn/learning-how-to-learn?network=g&utm_source=gg&creativeid=496323226698&matchtype=b&adgroupid=114147084941&gclid=Cj0KCQjw5ZSWBhCVARIsALERCvwV6TelSEJCadwQD6Guk74mbm2WgQKoODQZDZiLpc_WA1BL4D3zCgQaAvPeEALw_wcB&keyword=coursera&utm_content=B2C&hide_mobile_promo=&utm_campaign=95-BrandedSearch-Spanish-LATAM&campaignid=12247707079&devicemodel=&adpostion=&utm_medium=sem&device=c">
            Learning course</a>, which will provide you the best techniques
          to retain information and improve your memory, its freemium!
        </p>
        <br />
        <p>After 10 months of learning, doing projects on my own, sending cv to everyone out there, and a few nights crying myself out,
          with 0 dignity and self-esteem because no one was contacting me, I finally got an offer from FitHub and started officially my journey!</p>
      </div>
      <div className='md:w-1/2 p-10 text-justify'>
        <div className='text-3xl font-bold'><a className='text-red-600' href="#">#</a>Now</div>
        <br />
        <p>Now, I keep learning as much as I can, currently I’m trying to get familiar with Next.Js, but also, I’m reviewing the core concepts,
          the fundamentals itself of the technologies I already know to build cleaner and better code and make things the way they have to be done.</p>
        <br />
        <p>On the personal side, i enjoy Reading, Futbol and Chess, and im trying to start Writing. By the way, did i mention im two-times
          Chess Champion at College? And i expect to become three-times this September, whish me luck!</p>
        <br />
        <p>You can find me on Lichess as <span className='text-red-600'>DavidMadridYepez</span>.</p>
      </div>
    </div>
  )
}

export default About
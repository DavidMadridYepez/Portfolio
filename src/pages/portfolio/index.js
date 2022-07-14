import React from 'react'
import news from '../../assets/images/news2.png'

const Portfolio = () => {
  return (
    <div className='md:p-10 px-10 py-5 bg-black flex items-center justify-center h-full'>
      <div className='flex flex-col md:flex-row justify-center md:w-1/2 bg-neutral-900 h-fit'>
        <div className='overflow-hidden md:w-1/2'>
          <img className='h-full md:scale-125 md:hover:scale-100 duration-200' src={news} alt="" />
        </div>
        <div className='p-5 flex flex-col justify-between md:w-1/2 space-y-6 text-justify'>
          <div className='text-white space-y-5'>
            <h3 className='text-xl'>ABOUT IT</h3>
            <p>A Top News article build on ReactJs fetching information form NYT API (New York Times).
              Context in combination of useState was used to inject the 'theme' through all the code. Likewise,
              advanced concepts like useQuery were implemented alongside useParams to get the url parameters and cash the promises dynamically. </p>
          </div>
          <a className='text-right' rel='noreferrer' target='_blank' href="https://news-app-sage-alpha.vercel.app/"><button className='hover:text-red-500 hover:bg-neutral-900 border-2 border-red-600 duration-200 p-2 px-4 bg-red-600 font-medium'>GET ME THERE!</button></a>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
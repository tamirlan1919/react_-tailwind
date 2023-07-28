import React from 'react'
import laptop from '../components/assets/laptop.jpg'
const Analitycs = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1200px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto py-4 my-4' src={laptop} alt="/" />
        <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold uppercase'>Data analitycs dashboard</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analitycs Centrally</h1>
            <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nam quia animi sequi voluptatibus praesentium corporis architecto illum blanditiis et, quasi eveniet molestias reprehenderit nisi odit necessitatibus saepe eligendi? Magnam?</p>
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium mt-7 mx-auto md:mx-0 px-6 py-3'>Get Started</button>
        </div>
        
      </div>
    </div>
  )
}

export default Analitycs

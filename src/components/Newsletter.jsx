import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
            <p>Sing up to our newsletter and stay up to date</p>
        </div>
        <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input className='p-3 flex w-full rounded-md mr-4 mb-3 text-black' type="email" placeholder='Enter Email'/>
                <button className='bg-[#00df9a] text-black w-[200px] mb-3 rounded-md font-medium   mx-auto md:mx-0 px-6 py-3'>Notify Me</button>
            </div>
            <p>We care bout the protection of your data. Read our <span className='text-[#00df9a]'>Pricacy Policy</span></p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter

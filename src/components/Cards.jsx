import React from 'react'
import img1 from '../components/assets/single.png'
import img2 from '../components/assets/double.png'
import img3 from '../components/assets/triple.png'
const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className=' max-w-[1200px] mx-auto md:grid grid-cols-3 gap-8'>
            <div className='w-full  shadow-xl flex flex-col p-4 my-12 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={img1} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium  my-6 mx-auto mt-8 px-6 py-3'>Start Trial</button>
            </div>
            <div className='w-full  shadow-xl bg-gray-100 flex flex-col md:my-0 p-4 my-12 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={img2} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium  my-6 mx-auto mt-8 px-6 py-3'>Start Trial</button>
            </div>
            <div className='w-full  shadow-xl flex flex-col p-4  my-12 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={img3} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium  my-6 mx-auto mt-8 px-6 py-3'>Start Trial</button>
            </div>
      </div>
    </div>
  )
}

export default Cards

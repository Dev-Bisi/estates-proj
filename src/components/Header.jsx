import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='relative min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style= {{backgroundImage: "url('/image4.jpg')"}} id= 'Header'>
      <div className='bg-black opacity-30 w-full h-screen absolute inset-0' />
        <Navbar/>
        <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white z-20'>
            <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore homes that fit your dreams</h2>
            <div className='space-x-6 mt-16'>
                <a href="#Project" className='border border-white px-8 py-3 rounded'>Projects</a>
                <a href="#Contact" className='bg-blue-500 px-8 py-3 rounded'>Contact us</a>
            </div>
        </div>
    </div>
  )
}

export default Header
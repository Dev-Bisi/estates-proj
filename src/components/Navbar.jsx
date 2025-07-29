import React from 'react'

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px lg:px-32 bg-transparent'>
            <img alt='logo' src='/reactLogo.jpg' className='object-cover w-10 h-10 rounded-full' />
            <ul className='hidden md:flex gap-7 text-white'>
                <a href="#Header" className='cursor-pointer hover:text-grey-400'>Home</a>
                <a href="#Header" className='cursor-pointer hover:text-grey-400'>About</a>
                <a href="#Header" className='cursor-pointer hover:text-grey-400'>Projects</a>
                <a href="#Header" className='cursor-pointer hover:text-grey-400'>Testimonials</a>
            </ul>
            <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign Up</button>

        </div>
    </div>
  )
}

export default Navbar
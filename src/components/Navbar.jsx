import React, { useEffect, useState } from 'react'

const Navbar = () => { 
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  useEffect(()=>{
    if(showMobileMenu){
      document.body.style.overflow ='hidden'
    } else{
      document.body.style.overflow = 'auto'
    }
    return ()=>{
      document.body.style.overflow = 'auto'
    };
  },[showMobileMenu])


  return (
    <div className='absolute top-0 left-0 w-full z-10  '>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px lg:px-32 bg-transparent'>
            <img alt='logo' src='/reactLogo.jpg' className='object-cover w-15 h-15 rounded-full' />
            <ul className='hidden md:flex gap-7 text-white '>
                <a href="#Header" className='cursor-pointer rounded-full hover:underline hover:decoration-white hover:decoration-2 transition-all duration-1000 ease-linear'>Home</a>
                <a href="#About" className='cursor-pointer hover:underline hover:decoration-white hover:decoration-2 transition-all duration-1000 ease-linear'>About</a>
                <a href="#Projects" className='cursor-pointer hover:underline hover:decoration-white hover:decoration-2 transition-all duration-1000 ease-linear'>Projects</a>
                <a href="#Testimonials" className='cursor-pointer hover:underline hover:decoration-white hover:decoration-2 transition-all duration-1000 ease-linear'>Testimonials</a>
            </ul>
            <button className='hidden md:block bg-white px-8 py-2 rounded-full hover:bg-black hover:text-white'>Sign Up</button>
            <img onClick={()=> setShowMobileMenu(true)} src="/react.svg" className='md:hidden w-7 cursor-pointer' alt="" />
        </div>
        
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white trnasition-all`}>
          <div className='flex justify-end p-6 cursor-pointer'>
            <img onClick={()=> setShowMobileMenu(false)} src="/react.svg" className='w-6' alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <a  onClick={()=> setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
            <a  onClick={()=> setShowMobileMenu(false)} href="#Testimoials" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
            <a  onClick={()=> setShowMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
            <a  onClick={()=> setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
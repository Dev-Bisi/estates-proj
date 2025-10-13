import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Caroussels from './components/Caroussels'
import Testifiers from './components/Testifiers'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'



const App = () => {
  return (
    <div className='W-full overflow-hidden'>
      <Header/>
      <About />
      <div className='p-30 py-10'>
       <Caroussels />
      </div >
      <Testifiers />
      <Contact />
      <Footer />
      <Chatbot/>
    </div>
  )
}

export default App
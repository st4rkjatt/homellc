import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Section from './components/Section'
import RelatedPost from './components/RelatedPost'

function App() {


  return (
    <>
      <div className='grid grid-cols-6    '>

        <div className=' border-2 hidden  md:col-span-1 md:block'>
          <Sidebar />
        </div>


        <div className='col-span-6   md:col-span-5'>
          <Navbar />
          <Hero/>
          <RelatedPost/>
          
        </div>





      </div>

    </>
  )
}

export default App

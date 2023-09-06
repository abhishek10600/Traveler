import React from 'react'
import Navbar from '../components/Navbar'
import HeroSlider from '../components/HeroSlider'
import Articles from '../components/Articles'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="bg-[#d2adbd]">
        <Navbar/>
        <HeroSlider/>
        <Articles/>
        <Footer/>
    </div>
  )
}

export default Home
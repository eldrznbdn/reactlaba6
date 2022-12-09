import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom/dist';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import Sidebar from '../components/Sidebar'

const Home = () => {
const [isOpen, setIsOpen] = useState(false);
const toggle = () => {
setIsOpen(!isOpen)
}


  return (
    <>
      
      <HeroSection />
      <Services />
      <Footer />
    </>
  )
}

export default Home;

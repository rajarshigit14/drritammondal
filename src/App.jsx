import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import ClinicSection from './Components/ClinicSection';
import SocialsSection from './Components/SocialsSection';
import ImageGallery from './Components/ImageGallery';
import Services from './Components/Services';

function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <Services/>      
      <ClinicSection/>
      <ImageGallery/>
      <SocialsSection/>
    </>
  )
}

export default App
import React from 'react'
import RunDevelopersHero from  './Hero'
import gsap from "gsap";
import WhatWeBuild from './about';
import WhyChooseUs from './whyus';
import { ContactSection } from '@/components/contact-section';
const about = () => {
  return (
    <>
    
    <RunDevelopersHero/>
    <WhatWeBuild/>
    <WhyChooseUs/>
    <ContactSection/>

   
    </>
  )
}

export default about;

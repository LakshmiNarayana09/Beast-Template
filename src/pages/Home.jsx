import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import Hero from '../components/main/Hero'
import About from '../components/about/About'
import Facilities from '../components/facilities/Facilities'
import BIM from '../components/bmi/BIM'
import Schedule from '../components/schedule/Schedule'
import Review from '../components/review/Review'
import Join from '../components/join/Join'
import Coaches from '../components/coaches/Coaches'
import Blog from '../components/blog/Blog'
import Gallery from '../components/gallery/Gallery'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'


function Home() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = location.hash.replace("#", "");

      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 500,
          offset: -80,
        });
      }, 100);
    }
  }, [location]);
  
  return (
    <>
      <Hero />
      <About />
      <Facilities />
      <BIM />
      <Schedule />
      <Review />
      <Join />
      <Coaches />
      <Blog />
      <Gallery />
      <Contact />
      <Footer />
    </>
  )
}

export default Home

import React from 'react'
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

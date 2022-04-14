import React from 'react'


//Components
import Hero from '../components/Hero'
import Feature from '../components/Feature'
import AboutUs from '../components/AboutUs'
import SliderComponent from '../components/Slider.Component'
import Why from '../components/Why'
import Experience from '../components/Experience'
import Gallery from '../components/Gallery';
import Questions from '../components/Questions';

const Home = () => {
  return (
    <>
        <div>
            <Hero />
            <Feature />
            <AboutUs />
            <SliderComponent />
            <Why />
            <Experience />
            <Gallery />
            <Questions />
        </div>
    </>
  )
}

export default Home
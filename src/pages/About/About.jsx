import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../containers/Header/Header'
import About from '../../containers/About/About'
import './About.scss'


const About = () => {
  return (
    <div className='about-page'>
        <Header/>
        <About/>
        <Footer/>
    </div>
  )
}

export default About
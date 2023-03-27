import React from 'react'
import './Home.scss'
import Text from '../../components/Text/Text'
import About from '../../containers/About/About'
import Header from '../../containers/Header/Header'
import Skills from '../../containers/Skills/Skills'
import ProjectPortfolio from '../../containers/ProjectPortfolio/ProjectPortfolio'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home-page'>
        <div className='home-container'>
          <Header/>
          <h1 className='home-title'>Junior Software Developer.</h1>
          <div className='home-intro-text'>
              <Text text={"Currently a student on the _nology course, training to be a Junior Software Developer"}/>
          </div>
          <About/>
          <Skills/>
          <ProjectPortfolio/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home
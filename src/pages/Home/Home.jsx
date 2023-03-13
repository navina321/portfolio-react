import React from 'react'
import Header from '../../containers/Header/Header';
import Text from '../../components/Text/Text'
import About from '../../containers/About/About'
import Skills from '../../containers/Skills/Skills';
import Footer from '../../components/Footer/Footer'
const Home = () => {

  return (
    <div className='home-page'>
        <Header/>
        <h1 className='home-page__title'>Junior Software Developer</h1>
        <div>
          <Text text={""}/>
        </div>
        <About/>
        <Skills/>
        
        <Footer/>
    </div>
  )
}

export default Home
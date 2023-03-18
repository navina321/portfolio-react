import React from 'react'
import Text from '../../components/Text/Text'
import About from '../../containers/About/About'
import Header from '../../containers/Header/Header'
import Skills from '../../containers/Skills/Skills'
import './Home.scss'
const Home = () => {
  return (
    <div className='home-container'>
        <Header/>
        <h1 className='home-title'>Junior Software Developer.</h1>
        <div className='home-intro-text'>
            <Text text={"Nunc aliquam faucibus ac in donec commodo id. Dui viverra sit feugiat massa pellentesque arcu at quis. Diam, elementum morbi pellentesque blandit suscipit sit. Neque, et consequat phasellus augue neque mollis tempor."}/>
        </div>
        <About/>
        <Skills/>
    </div>
  )
}

export default Home
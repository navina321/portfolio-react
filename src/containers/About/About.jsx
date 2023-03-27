import React from 'react'
import './About.scss'
import ProfileImage from '../../assets/images/ProfileImage.jpg'
import Text from '../../components/Text/Text'

const About = () => {
  return (
    <div className='about-container about'>
        <h1 className='about__header'>ABOUT.</h1>
        <img src = {ProfileImage} alt = 'profile' className='about__image'/>
        <div className='about__text'>
            <Text text = {"After graduating from university, I discovered an interest in coding while caring for a family member. I took beginner online courses on the topic, and found I enjoyed the challenge and creativity involved in building programs. I am excited to pursue a career in technology, as it offers multiple opportunities for growth and innovation across various industries. "}/>
            <Text text ={"I also have experience in designing custom wedding stationery, which has further developed my ability to communicate effectively and think creatively, in order to create designs that meet the clients’ needs while maintaining my own design style. During the nology course I’ve acquired a number of transferable skills, such as project management and collaboration similar to that of a workplace environment, as well as a strong foundation in multiple programming languages, making me a well-rounded candidate, inspired to pursue a career in tech."}/>
        </div>
    </div>
  )
}

export default About
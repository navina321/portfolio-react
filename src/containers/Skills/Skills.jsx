import React from 'react'
import Text from '../../components/Text/Text'
import './Skills.scss'
import BEM from '../../assets/images/skills-icons/BEM.svg'
import CSS3 from '../../assets/images/skills-icons/CSS3.svg'
import Git from '../../assets/images/skills-icons/Git.svg'
import HTML5 from '../../assets/images/skills-icons/HTML5.svg'
import Java from '../../assets/images/skills-icons/Java.svg'
import JavaScript from '../../assets/images/skills-icons/JavaScript.svg'
import ReactIcon from '../../assets/images/skills-icons/React.svg'
import SCSS from '../../assets/images/skills-icons/SCSS.svg'
import SpringBoot from '../../assets/images/skills-icons/SpringBoot.svg'

const Skills = () => {
  return (
    <div className='skills-container'>
        <div className='skills-text'>
            <h1 className='skills-title'>SKILLS</h1>
            <Text text={"Egestas dictumst enim dui ante nisl risus commodo. Pellentesque dignissim praesent purus in neque erat et. Cras donec ut orci eget neque bibendum cras. Vitae, ultricies arcu pretium duis."}/>
        </div>
        <section className = 'skills-icons'>
            <div className = 'skills-icons__icon'>
                <img src = {Git}alt="git-icon"/>
                <h3 className = 'skills-icons__text'>Git</h3>
            </div>
            <div className = 'skills-icons__icon'>
                <img src = {HTML5}alt="html5-icon"/>
                <h3 className = 'skills-icons__text'>HTML5</h3>
            </div>
            <div className = 'skills-icons__icon'>
                <img src = {CSS3}alt="css3-icon"/>
            <h3 className = 'skills-icons__text'>CSS3</h3>
            </div>
            <div className = 'skills-icons__icon'>
                <img src = {SCSS}alt="scss-icon"/>
                <h3 className = 'skills-icons__text'>SCSS</h3>
            </div>
            <div className = 'skills-icons__icon'>
                <img src = {JavaScript}alt="javascript-icon"/>
                <h3 className = 'skills-icons__text'>JavaScript</h3>
            </div>
            <div className = 'skills-icons__icon'>
                <img src = {BEM}alt="bem-icon"/>
                <h3 className = 'skills-icons__text'>BEM</h3>
            </div>
            <div className = 'skills-icons__icon'>
                <img src = {ReactIcon}alt="react-icon"/>
                <h3 className = 'skills-icons__text'>React</h3>
            </div>
            <div className = 'skills-icons__icon'>
                <img src = {Java}alt="java-icon"/>
                <h3 className = 'skills-icons__text'>Java</h3>
            </div>
            <div className = 'skills-icons__icon'>
                <img src = {SpringBoot}alt="spring-boot-icon"/>
                <h3 className = 'skills-icons__text'>Spring Boot</h3>
            </div>
        </section>
        
    </div>
  )
}

export default Skills
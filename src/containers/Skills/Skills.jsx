import React from 'react'
import Text from '../../components/Text/Text'
import './Skills.scss'
import BEM from '../../assets/images/skills-icons/BEM.png'
import CSS3 from '../../assets/images/skills-icons/CSS3.png'
import Git from '../../assets/images/skills-icons/Git.png'
import HTML5 from '../../assets/images/skills-icons/HTML5.png'
import Java from '../../assets/images/skills-icons/Java.png'
import JavaScript from '../../assets/images/skills-icons/JavaScript.png'
import ReactIcon from '../../assets/images/skills-icons/React.png'
import SCSS from '../../assets/images/skills-icons/SCSS.png'
import SpringBoot from '../../assets/images/skills-icons/SpringBoot.png'
import SkillsIcons from '../../components/SkillsIcons/SkillsIcons'

const Skills = () => {
  return (
    <div className='skills-container'>
        <div className='skills-all-text'>
            <h1 className='skills-header'>SKILLS.</h1>
            <div className='skills-text'> 
                <Text text = {"These are a list of skills I have learnt on the course:"}/>
            </div>
        </div>
        <section className='skills-icons'>
            <SkillsIcons image = {Git} alt = "Git" name = "Git" />
            <SkillsIcons image = {HTML5} alt = "HTML5" name = "HTML5" />
            <SkillsIcons image = {CSS3} alt = "CSS3" name = "CSS3" />
            <SkillsIcons image = {JavaScript} alt = "JavaScript" name = "JavaScript" />
            <SkillsIcons image = {SCSS} alt = "SCSS" name = "SCSS" />
            <SkillsIcons image = {BEM} alt = "BEM" name = "BEM" />
            <SkillsIcons image = {ReactIcon} alt = "React" name = "React" />
            <SkillsIcons image = {Java} alt = "Java" name = "Java" />
            <SkillsIcons image = {SpringBoot} alt = "SpringBoot" name = "SpringBoot" />
        </section>
        
    </div>
  )
}

export default Skills
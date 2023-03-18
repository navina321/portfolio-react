import React from 'react'
import Project from '../../components/Project/Project'
import './ProjectPortfolio.scss'
import ProjectBlank from '../../assets/images/project-images/ProjectBlank.png'
import Calculator from '../../assets/images/project-images/calculator-project.png'
import Trivia from '../../assets/images/project-images/trivia-game-project.png'
import PunkAPI from '../../assets/images/project-images/punk-api-project.png'
import ClientProject from '../../assets/images/project-images/client-project.png'
import Hangman from '../../assets/images/project-images/hangman-project.png'
const ProjectPortfolio = () => {
  return (
    <div className='portfolio-container'>
        <h1 className='portfolio-header'>PORTFOLIO.</h1>
        <div className='portfolio-projects'>
            <Project image={Calculator} title = "CALCULATOR" 
            alt = "Calculator" 
            languages = "HTML, SCSS, JavaScript" 
            deployLink={'https://navina321.github.io/calculator-project/'} codeLink = {'https://github.com/navina321/calculator-project'}/>

            <Project 
            image={Trivia} 
            title = "TRIVIA GAME" 
            alt = "Trivia-Game" 
            languages = "HTML, SCSS, JavaScript" 
            deployLink={'https://navina321.github.io/game-project/'} 
            codeLink = {'https://github.com/navina321/game-projectttps://chat.openai.com/auth/login?next=/chat'}/>

            <Project 
            image={PunkAPI} 
            title = "PUNK API" 
            alt = "PunkAPI" 
            languages = "React" 
            deployLink={'https://navina321.github.io/punk-project/">'} 
            codeLink = {'https://github.com/navina321/punk-project'}/>

            <Project 
            image={ClientProject} 
            title = "CLIENT PROJECT" 
            alt = "ClientProject" 
            languages = "React" 
            deployLink={'https://sable-client-project.web.app/'} 
            codeLink = {'https://github.com/nology-tech/Sable-client-project'}/>

            <Project 
            image={Hangman} 
            title = "JAVA" 
            alt = "hangman" 
            languages = "JAVA" 
            deployLink={'https://github.com/navina321'} 
            codeLink = {'https://github.com/navina321/hangman-java-project'}/>

            <Project 
            image={ProjectBlank} 
            title = "FULL STACK" 
            alt = "Project" 
            languages = "JAVA" 
            deployLink={'https://github.com/navina321'} 
            codeLink = {'https://github.com/navina321'}/>
        </div>
    </div>
  )
}

export default ProjectPortfolio
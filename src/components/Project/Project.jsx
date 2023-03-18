import React from 'react'
import './Project.scss'
import Eye from '../../assets/images/project-icons/eye.png'
import Code from '../../assets/images/project-icons/code.png'
import Line from '../../assets/images/project-icons/line.png'

const Project = ({image, title, alt, languages, deployLink, codeLink }) => {
  return (
    <div className='project-container project'>
        <img src = {image} alt = {alt} className='project__image'/>
        <section className='project__title-icons'>
        <h2 className='project__title'>{title}</h2>
            <div className='project__icons'>
                <div className='project-view-icon'>
                    <a href={deployLink}>
                        <img src = {Eye} alt = 'view-project' className='project__icons--icon'/>
                    </a>
                </div>
                <div className='project-code-icon'>
                    <a href={codeLink}>
                        <img src = {Code} alt = 'code-project' className='project__icons--icon'/>
                    </a>
                </div>
            </div>
        </section>
    <img src = {Line} alt='line'className='line'/>
        <p className='project__lang'>{languages}</p>
    </div>
  )
}

export default Project
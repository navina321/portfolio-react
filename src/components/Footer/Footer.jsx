import React from 'react'
import './Footer.scss'
import CV from '../../assets/images/footer-icons/cv.svg'
import GitHub from '../../assets/images/footer-icons/GitHub.svg'
import linkedin from '../../assets/images/footer-icons/linkedin.svg'

const Footer = () => {
  return (
    <div className='footer-container'>
        <img src={CV} alt = 'cv-icon'/>
        <img src={GitHub} alt = 'github-icon'/>
        <img src={linkedin} alt = 'linkedin-icon'/>
    </div>
  )
}

export default Footer
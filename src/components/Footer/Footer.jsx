import React from 'react'
import './Footer.scss'
import FooterIcons from '../../assets/images/footer-icons/Icons.png'
const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-icons'>
            <img src = {FooterIcons} alt = 'footer-icons' className='icons'/>
        </div>
    </div>
  )
}

export default Footer
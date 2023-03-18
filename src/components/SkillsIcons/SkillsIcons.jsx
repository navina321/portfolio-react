import React from 'react'
import './SkillsIcons.scss'
const SkillsIcons = ({image, alt, name}) => {
  return (
    <div className='skill-icon-container'>
        <img src = {image} alt = {alt}/>
        <h3 className='icon-text'>{name}</h3>
    </div>
  )
}

export default SkillsIcons
import React from 'react'
import './Text.scss'
const Text = ({text}) => {
  return (
    <div className='text-container'>
        <p className='text-text'>{text}</p>
    </div>
  )
}

export default Text
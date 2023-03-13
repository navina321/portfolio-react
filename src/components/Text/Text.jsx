import React from 'react'
import './Text.scss'

const Text = ({text}) => {
  return (
    <div className='text-container'>
        <p className='text-text'>{text}Nunc aliquam faucibus ac in donec commodo id. Dui viverra sit feugiat massa pellentesque arcu at quis. Diam, elementum morbi pellentesque blandit suscipit sit. Neque, et consequat phasellus augue neque mollis tempor. </p>
    </div>
  )
}

export default Text
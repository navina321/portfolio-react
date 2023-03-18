import React from 'react'
import './Header.scss'
import Navigation from '../../components/Navigation/Navigation'

const Header = () => {
  return (
    <div className='header-container'>
        <h1 className='header-text'>NAVINA JAYANTHAN</h1>
        <Navigation/>       
    </div>
  )
}

export default Header
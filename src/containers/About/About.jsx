import React from 'react'
import Text from '../../components/Text/Text'
import ProfileImage from '../../assets/images/ProfileImage.jpg';
import './About.scss'
const About = () => {
  return (
    <div className='about-container'>
        <div className='about'>
            <h1 className='about-title about-info'>ABOUT</h1>
            <div className='about-profile-image'>
                <img src={ProfileImage} alt='profile-image'/>
            </div>
            <div className='about-info'>
                <Text text={"Interdum sollicitudin fringilla quisque vivamus. Eget viverra metus, ultrices aliquet. Velit, tincidunt sed sed proin pellentesque dictum pulvinar. Arcu diam massa elementum tempor lectus. Aliquam lacus lacus diam eget quisque purus etiam mi, curabitur. Imperdiet sed felis ipsum, porttitor ipsum faucibus neque cursus. Quis blandit quisque sed diam at tellus sagittis."}/>
            </div>
        </div>
    </div>
  )
}

export default About
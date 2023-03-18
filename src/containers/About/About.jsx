import React from 'react'
import './About.scss'
import ProfileImage from '../../assets/images/ProfileImage.jpg'
import Text from '../../components/Text/Text'

const About = () => {
  return (
    <div className='about-container about'>
        <h1 className='about__header'>ABOUT.</h1>
        <img src = {ProfileImage} alt = 'profile' className='about__image'/>
        <div className='about__text'>
            <Text text = {"Interdum sollicitudin fringilla quisque vivamus. Eget viverra metus, ultrices aliquet. Velit, tincidunt sed sed proin pellentesque dictum pulvinar. Arcu diam massa elementum tempor lectus. Aliquam lacus lacus diam eget quisque purus etiam mi, curabitur. Imperdiet sed felis ipsum, porttitor ipsum faucibus neque cursus. Quis blandit quisque sed diam at tellus sagittis."}/>
            <Text text ={"Urna, vel nibh lectus condimentum. Purus pellentesque scelerisque tristique in vestibulum augue accumsan. Eu morbi porttitor dolor ipsum dui ultrices viverra nisi, leo. Erat porta risus, id enim adipiscing sit amet at. Tortor, posuere pulvinar volutpat magnis felis suspendisse ut. Tincidunt in pulvinar suspendisse lectus enim, tortor mattis ut. Integer auctor aliquet tincidunt rhoncus at."}/>
        </div>
    </div>
  )
}

export default About
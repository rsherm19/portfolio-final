import React from 'react'
import aboutPhoto from './assets/images/ryan.jpg'

const About = () => {
  return (
    <>
      <h1>About Me:</h1>
      <div className='about-flex-container'>
        <img src={aboutPhoto} alt="man with blonde hair smiling" className='profile-photo' />
        <p className='about-description'>I am a full-stack software engineer who attacks problems with a creative, entrepreneurial mindset. I strive to grow and improve rather than simply get the job done. I have experience creating music as a producer and mixing engineer, and I continually carry that creativity and critical thinking into my full-stack software development.</p>
      </div>
    </>
  )
}

export default About
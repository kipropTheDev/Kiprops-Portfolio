import React from 'react'
import { Link } from 'react-scroll'
import './index.scss'

function Home() {
  return (
    <div className='home'>
      <p className='home__intro'>Hi, my name is</p>
      <h1 className='home__name'> Simboley Kiprop.</h1>
      <h1 className='home__title'>I build things for the web.</h1>
      <p className='home__desc'>I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on finding development work as well as building small scale projects and freelance work.</p>
      <Link to="work" smooth={true} offset={-50} duration={500} className='home__button'>Check out my work!</Link>
    </div>
  )
}

export default Home
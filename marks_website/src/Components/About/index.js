import React from 'react'
import './index.scss'

function About() {
  return (
    <div className='about'>
      <div className='about__heading'>
          <h1><span>01. </span>About Me</h1>
          <div className='whiteline'></div>
      </div>
      <div className='about__desc'>
        <p>Hello! My name is Kiprop and I enjoy creating things that live on the internet. My interest in web development started back in 2015 when I decided to take up Information Technology as a course in collage — my courses and projects taught me a lot about HTML & CSS!</p>
        <p>Fast-forward to today, and I've had the privilege of working at a Large Kenyan Enterprise(RAMCO Industries LTD), a huge corporation. My main focus these days is building accessible, inclusive products and digital experiences.</p>
        <p>I have also undertaken numerous projects in various programming languages and technologies. <span><a href='https://www.github.com/kipropTheDev/' target='_blank'>See projects.</a></span></p>
        <p>Here are a few technologies I've been working with recently:</p>
        <ul className='tech-list'>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Node.js</li>
          <li>NEXT.js</li>
          <li>Python</li>
          <li>WordPress</li>
        </ul>
      </div>

    </div>
  )
}

export default About
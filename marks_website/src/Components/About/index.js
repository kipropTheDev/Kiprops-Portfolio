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
        <p>Hello and welcome to my profile! My name is Kiprop, and I am a passionate junior software developer. With a strong foundation in computer science and a love for problem-solving.</p>
        <p>My experience includes developing software using programming languages such as <span>JavaScript, Java, Python</span>, as well as working with frameworks like <span>React</span>. I am also familiar with version control systems such as <span>Git</span>. I did my internship at <span>Ramco Industries </span>where I gained experience working in Agile development environments.</p>
        <p>Aside from technical skills, I am a team player who enjoys collaborating with colleagues to achieve common goals. I understand the importance of communication, both within and outside of the team, and I always strive to maintain a positive and professional attitude.</p>
        <p>In my free time, I enjoy exploring new technologies, working on personal projects, and participating in coding challenges. Here are a few technologies I've been working with recently:</p>
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